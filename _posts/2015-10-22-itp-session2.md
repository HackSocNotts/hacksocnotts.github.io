---
layout: post
title: Introduction to Python Programming - Session 2 Catchup
author: Jamie Tanna (HackSoc 2015-16 General Secretary)
excerpt: <p>A catchup post for those who either missed, or just want to recap, our second Introduction to Python Programming session.</p>
---

Hey Hacksoc,

So whether you missed our session last week, or you just want to brush up on it again, we've got a catchup session here.

If this is the first post you're reading, I'd instead recommend following the [first session's catchup]({% post_url 2015-10-18-itp-session1 %}).

### <a name="programming-in-python"></a>Programming in Python

In the last session, we introduced you to some example programs and how to get some basic input from the user. We're going to build upon that in this session, and make incremental steps to build a more advanced basic calculator.

#### Letting the user specify operations

In the following program, we're going to expand the [Basic Calculator]({% post_url 2015-10-18-itp-session1 %}#basic-calculator) we created last session.

{% highlight python %}
number1 = raw_input("Please enter the first number: ")
number2 = raw_input("Please enter the second number: ")
operation = raw_input("Please enter operation 'plus' 'minus' 'divide' 'multiply': ")

number1 = float(number1)
number2 = float(number2)
operation = str(operation)

result = 0

if(operation == "minus"):
    result = number1 - number2
if(operation == "plus"):
    result = number1 + number2
if(operation == "divide"):
    result = number1 / number2
if(operation == "multiply"):
    result = number1 * number2

print number1, operation, number2, "equals", result
{% endhighlight %}

We've expanded from our previous example of a Basic Calculator, which allowed a user to print out the result of i.e. `1+2` or `4*10`. However, to change the `operation` they want to work with, they would have to edit the file, then rerun the script, *every time*. I don't know about you, but I'd find this really annoying. To fix this, we're instead going to have it where the user is able to specify which operation they can use to work with.

However, we need to actually work out what the user's input is. To do this, we need to use *`if` statements*, which are a way to perform certain bits of code if some condition is met. To use an `if` statement, we pass in a value which can be `True` or `False`, such as whether something is equal to another `"string" == "notstring"` or `7 == 10`. We will cover different comparisons in a later session.

As you see in the first `if` statement, we are checking whether operation, which is a string provided by the user, is equal to `"minus"`. If this is valid, we then execute the code `result = number1 - number2`. The indent defines a *block* (block: a section of code which is grouped together) which is executed *if and only if* the string is `"minus"`. We then repeat the check for each of the valid options, and execute the result.

We finally print out information to the user about the whole calculation, for instance:

```
Please enter the first number: 10
Please enter the second number: 20
Please enter operation 'plus' 'minus' 'divide' 'multiply': plus
10.0 plus 20.0 equals 30.0
```

One thing to note is that we put the `result` variable up top so we can correctly set values to it. This is so we don't get issues when trying to refer to something nonexistent.

#### Handling errors

In the previous section, we created a calculator that can work out calculations given an operator provided by the user. However one thing that is not handled at all are the error cases. When programming, there will often be cases where your code will fail; be it your own code not being 100% correct, or just that the user has done something you haven't expected. In this case, we've been assuming the user will always send us the correct entry. However, what if they were to misspell? The following program allows us to warn the user when they've done something wrong.

{% highlight python %}
number1 = raw_input("Please enter the first number: ")
number2 = raw_input("Please enter the second number: ")
operation = raw_input("Please enter operation 'plus' 'minus' 'divide' 'multiply': ")

number1 = float(number1)
number2 = float(number2)
operation = str(operation)

result = 0

if(operation == "minus"):
    result = number1 - number2
elif(operation == "plus"):
    result = number1 + number2
elif(operation == "divide"):
    result = number1 / number2
elif(operation == "multiply"):
    result = number1 * number2
else:
    print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

print number1, operation, number2, "equals", result
{% endhighlight %}

You will be able to see that that we've swapped out the `if` for `elif`. `elif` is short for `else if`, which means we will now only hit the check for `operation == "plus"` *if and only if* the check for `operation == "minus"` does not match true. To verify this, check out the [If-Else section](#if-else). We also take advantage of the `else`, which is a way of saying "match anything else that isn't caught above", which is useful because we can't work out every different combination of input that someone can give us.

We will return an error if our user didn't give us anything valid, and print the result whether they gave us valid input or not.


#### Repeating until we get valid input

In the previous example, we made the program print out an error if we had invalid input. However, that's not very useful to a user, as it means they then need to re-run the application, and enter all their data again. Instead, we're going to keep asking the user to enter their data until we're sure that it's valid.

{% highlight python %}
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
        isInvalidInput = False
        result = number1 / number2
    elif(operation == "multiply"):
        isInvalidInput = False
        result = number1 * number2
    else:
        print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

####### end of loop

print number1, operation, number2, "equals", result
{% endhighlight %}

We do this by creating a new variable, `isValidInput`, which is used in the `while` loop. A `while` loop will keep repeating the block it corresponds to until the value, `isInvalidInput` in this example, does not resolve in `False`. Once we have the input, we follow the same structure as the last program - checking whether our input returns the value input we expected. If it does, we set `isInvalidInput` to `False` - so we will then be able to break out of the `while` loop - and also perform the calculation. We perform the calculation here so we don't have to repeat the if statements.

Note that the `####### end of loop` line is purely for visual context, and would generally be removed.

#### Running multiple calculations

However, what if we want to run multiple calculations? We'd have to keep running the program, which could be a bit annoying. Instead, let's keep running calculations until we're told to stop.

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

    if(escape == "yes"):
        doWantMoreCalculations = False

{% endhighlight %}

We contain the whole program inside a big `while` loop that waits for the value `wantMoreCalculations` to be set to `False` by the user. The program exists as it does above, but instead of not doing anything after printing the result, we now ask the user if they want to leave, and if they enter `"yes"` the program exits. If not, it will return to asking for the first number again.

We've only got a single if statement at the bottom of the program, instead of two - one for `"yes"` and one for `"no"`. Why?

#### <a name="if-else"></a> If-Else Examples

Try the following examples with varying values of `operation` to verify how the `if`/`elif`/`else` statement works:

{% highlight python %}
operation = "minus"

if(operation == "minus"):
	print "Operation is minus"
else:
	print "Operation is not minus or plus"

if(operation == "plus"):
	print "Operation is plus"
elif(operation == "minus"):
	print "Operation is minus"
else:
	print "Operation is not plus or minus"

if(operation == "divide"):
	print "Operation is divide"
else:
	print "Operation is not divide or multiply"

if(operation == "multiply"):
	print "Operation is multiply"
elif(operation == "divide"):
	print "Operation is not multiply or divide"
{% endhighlight %}
