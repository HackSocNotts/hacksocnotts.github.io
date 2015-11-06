---
layout: post
title: Introduction to Python Programming - Session 3 Catchup
author: Jamie Tanna (HackSoc 2015-16 General Secretary)
excerpt: <p><em>Don't Repeat Yourself</em> - use functions!</p>
---

### Error Cases

One thing we have to be careful about when coding is the point where we may reach invalid input, or cases that won't work in our program. These cases need to be carefully considered when developing software, otherwise serious issues can occur.

For instance, one case we've not thought about is division by zero, which is impossible, and will cause errors if unchecked. For instance, if we had tried to run `10 / 0` in our previous program, Python would crash, reporting the error `float division by zero`. However, in a real application, this uncaught error could crash the whole system - which is never a good thing to happen.

{% highlight python %}
wantMoreCalculations = True
while wantMoreCalculations:

    number1 = raw_input("Please enter the first number: ")
    number2 = raw_input("Please enter the second number: ")

    number1 = float(number1)
    number2 = float(number2)

    result = 0

    isInvalidInput = True
    while isInvalidInput:
        operation = raw_input("Please enter operation 'plus' 'minus' 'divide' 'multiply': ")
        operation = str(operation)

        if(operation == "minus"):
            isInvalidInput = False
            result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = raw_input("Please enter the second number: ")
                    number2 = float(number2)
                    if number2 == 0:
                        isZero = True
                    else:
                        isZero = False

                isInvalidInput = False
            else:
                isInvalidInput = False
            result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"
    #######
    print number1, operation, number2, "equals", result

    escape = raw_input("Do you want to escape? 'yes' 'no' ")

    if(escape == "yes" or escape == "YES"):
        doWantMoreCalculations = False
    elif(escape == "Yes"):
        doWantMoreCalculations = False
{% endhighlight %}

Note that the code above checks if our second number is zero only when we're running a divide. We make sure to keep prompting for input until we get a non-zero number to divide by.

### Cleaning Up Our Logic

This section is actually a very quick example, hence the snippet opposed to the whole file. We aim to clean up the code to make it easier to maintain and work with.

{% highlight python %}
    # ...
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = raw_input("Please enter the second number: ")
                    number2 = float(number2)
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            result = number1 / number2
        elif(operation == "multiply"):
	  # ...
{% endhighlight %}

We refactor the logic to not bother with reassigning `False` to `isZero` (which it already must be, otherwise we wouldn't continue in the `while` loop). We also remove the repeated case of setting `isInvalidInput = False`, by moving the assignment out of the `if` statement.

### Don't Repeat Yourself

There is a well well known principle in Computer Programming called *Don't Repeat Yourself*, or *DRY*. Repeating your code - be it copy and pasting, or just following similar patterns - is never a good habit to fall into. The repetition means that in the future you will have to update various codeblocks if i.e. you find a bug with the code, or you need to add new functionality. When you start repeating code more than twice, this becomes a maintainability nightmare. Therefore, when you find yourself doing the same thing twice, it is always a good idea to take a step back and think how you can make the pattern of code you're using, repeatable.

For instance, in our previous program, we are repeating code to take in numbers:

{% highlight python %}
# ...
number1 = raw_input("Please enter the first number: ")
number2 = raw_input("Please enter the second number: ")

number1 = float(number1)
number2 = float(number2)
# ...
{% endhighlight %}

This code can much more easily be translated into a *function* (function: a named section of code to perform some task) which allows us to turn the pattern we're using into a repeatable task.

Functions allow us to define (hence `def`) a named section of code (such as `get_number_from_user`) which we can perform some useful task with. This then allows us to reuse it in multiple places, which saves code repetition and makes your program more easy to understand and work with. However, in order to produce truly useful code, we want to be able to get data out of functions, such as if the user has entered input. This is done via the `return` statement, and will return a variable (i.e. `number`, `result`) or a value (i.e. `True`, `100`).

In the following code snippet we have converted our pattern for taking numbers as input into a function `get_number_from_user`.

{% highlight python %}
def get_number_from_user():
    number = raw_input("Please enter a number: ")
    number = float(number)
    return number


wantMoreCalculations = True
while wantMoreCalculations:

    number1 = get_number_from_user()
    number2 = get_number_from_user()

    result = 0

    isInvalidInput = True
    while isInvalidInput:
		# ...
{% endhighlight %}

We move the main pattern into the function, and then replace it by a call to the function, which is done by the function name followed by parentheses `()`, which informs Python that we're using a function. We use an assignment because we know that the `get_number_from_user` function returns a value.

**Exercises:**

- Is this all we need to do? Check if there is anywhere else we've taken in numbers that we need to convert into calls to `get_number_from_user`.

### Abstracting Common Patterns into Functions

However, we need to make this function more generic. Remember how in previous versions of the code, we would prompt the user with something more useful, such as `Enter the second number: `? To do this, we need to pass in something to each function, via something called *parameters* (parameter: a variable that can be passed into a function). Parameters allow us to give variables to functions, which in turn let our functions do more interesting things.

{% highlight python %}
def get_number_from_user(prompt_string):
    number = raw_input(prompt_string)
    number = float(number)
    return number


wantMoreCalculations = True
while wantMoreCalculations:

    number1 = get_number_from_user("Please enter the first number: ")
    number2 = get_number_from_user("Please enter the second number: ")

    result = 0

    isInvalidInput = True
    while isInvalidInput:
		# ...
{% endhighlight %}

In this code snippet, we pass in the string that we want to be output, so it will then prompt the user something more obvious. This is done via a parameter, which allows us to specify from our code what we want to be prompted, instead of using the same string.

### You Get a Function, You Get a Function, Everyone Gets a Function!

Now we get to cleaning up more of the code. In this segment, we will turn more bits of repeated code into functions in order to remove any repetitions.

{% highlight python %}
def get_number_from_user(prompt_string):
    number = raw_input(prompt_string)
    number = float(number)
    return number

def get_string_from_user(prompt_string):
    string = raw_input(prompt_string)
    string = str(string)
    return string

def get_result(number1, number2, operation):
    if(operation == "minus"):
        result = number1 - number2
    elif(operation == "plus"):
        result = number1 + number2
    elif(operation == "divide"):
        result = number1 / number2
    elif(operation == "multiply"):
        result = number1 * number2

    return result

def get_operation_from_user(number2):
    operation = ""
    isInvalidInput = True
    while isInvalidInput:
        operation = get_string_from_user("Please enter operation 'plus' 'minus' 'divide' 'multiply': ")

        if(operation == "minus"):
            isInvalidInput = False
        elif(operation == "plus"):
            isInvalidInput = False
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
        elif(operation == "multiply"):
            isInvalidInput = False
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


wantMoreCalculations = True
while wantMoreCalculations:

    number1 = get_number_from_user("Please enter the first number: ")
    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    print number1, operation, number2, "equals", result

    escape = raw_input("Do you want to escape? 'yes' 'no' ")

    if(escape == "yes" or escape == "YES"):
        doWantMoreCalculations = False
    elif(escape == "Yes"):
        doWantMoreCalculations = False
{% endhighlight %}

We follow our previous example, and move the code for getting a string input into the function `get_string_from_user`.

We take the functionality for `get_result` and move it into its own function so that in the future, we are able to calculate an operation much more easily.

We also take the whole chunk of code to take `get_operation_from_user` out, including its loop. This allows us to take the large error checking block, and move it into its own component. One thing to note is that at the end of the function, we have the statement `return operation, number2`; this allows us to return *multiple* values, and is an incredibly useful feature in Python. In this example, we return both the `operation` that we were given by the user, as well as the value of `number2`. Now, why do we do this? When we pass in our `number2` value (from our main loop) into the function, Python creates a copy of that variable. This means that when we then update it, Python only updates our copy, and not the previous value - which may not seem useful, but in the future we'll see that it's important. Therefore, we need to make sure that we return the new value of `number2`, which can be done in the same `return` statement.

Because we've returned multiple values, we also need to make sure that we collect them on the other side. This is done via the same syntax - `operation, number2 = get_operation_from_user(number2)` - where we inform Python we have multiple values via the function.

**Exercises:**

- Try and return more than two values from a function. Does it work the same?
