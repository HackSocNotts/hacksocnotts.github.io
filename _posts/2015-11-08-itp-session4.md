---
layout: post
title: Introduction to Python Programming - Session 4 Catchup
author: Jamie Tanna (HackSoc 2015-16 General Secretary)
excerpt: <p>Adding a menu and the ability to save history with our calculator</p>
---

### Repeating Input Less Intrusively

Previously, we would ask the user whether they want to exit, or not, and then would carry on the program. However, this is a bit intrusive, and can get aggravating if they wish to enter more numbers, as they will have to break their workflow and enter "no". Instead, we'll update the program so that we can instead enter `-1` to exit.

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

    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
	if(number1 == -1):
		wantMoreCalculations = False
		break

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    print number1, operation, number2, "equals", result


{% endhighlight %}

**Exercises:**

- Can you think why we used the `break`	keyword here, instead of just setting `wantMoreCalculations` to `False`?
- After each new entry, create a blank line of input to make it more obvious where one case begins, and another ends. Such as:

```
Please enter the first number (enter -1 to exit): 123
Please enter the second number: 12
Please enter operation 'plus' 'minus' 'divide' 'multiply': plus
123.0 plus 12.0 equals 135.0

Please enter the first number (enter -1 to exit):
```

### A More Friendly Program

In the following sections, we're going to adapt the program to use a menu system, so the user can do multiple things in each program run, such as view the history of previously run calculations.

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
            # result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            # result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            # result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            # result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


def perform_calculation():
    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
    if(number1 == -1):
       return False

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    print number1, operation, number2, "equals", result

    return True


print "Hello, welcome to the awesome calculator program"
print "These are your options:"
print " 1. Perform calculations"
print " 0. Exit program"

menu_option = get_number_from_user("Please enter your menu option: ")

if(menu_option == 1):
    wantMoreCalculations = True
    while wantMoreCalculations:
        wantMoreCalculations = perform_calculation()
elif(menu_option == 0):
    pass
else:
    print "Woops, you dun goofed. Please enter 0 or 1 as valid input"
{% endhighlight %}

You'll notice that we've removed the main loop of the program, and instead replaced it with a menu system, which for now only provides us with the ability to run calculations or exit.

We move our main loop from the previous version into the `perform_calculation` function, which allows us to then return a boolean value as to whether the user wishes to keep processing or not. This then sets the value of the `while` loop in the menu.

**Exercises:**

- What happens if we get rid of the `pass`? And what if there is no `elif(menu_option == 0):` case?

### A Proper Menu System

In our previous example, we would exit the program if we entered `-1` inside `perform_calculation` - which isn't useful because when we extend the menu, we can't do more than one thing at once, especially if we enter a wrong menu item.

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
            # result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            # result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            # result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            # result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


def perform_calculation():
    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
    if(number1 == -1):
       return False

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    print number1, operation, number2, "equals", result

    return True


stayInMenu = True
while stayInMenu:

    isInvalidInput = True
    while isInvalidInput:
        print "Hello, welcome to the awesome calculator program"
        print "These are your options:"
        print " 1. Perform calculations"
        print " 0. Exit program"

        menu_option = get_number_from_user("Please enter your menu option: ")

        if menu_option == 1 or menu_option == 0:
            isInvalidInput = False
        else:
            print "Woops, you dun goofed. Please enter 0 or 1 as valid input"

    if(menu_option == 1):
        wantMoreCalculations = True
        while wantMoreCalculations:
            wantMoreCalculations = perform_calculation()
    elif(menu_option == 0):
        stayInMenu = False
{% endhighlight %}

Therefore we add a loop around our menu code, and until we get valid input, as we've done in previous versions of the code.

### Global Variables and Scope

Before we carry on, we need to talk about *scope* (scope: the visibility of variables).

We previously mentioned that function parameters are only valid inside the function, and as such, won't get reflected in the main program. This is an example of scoping - the function has its own copy of the variable, at its scope, and will only update that, instead of the instance in the main program.

This can be demonstrated by the following code:

{% highlight python %}
a = 0

def inc_global_a():
    # Because we modify the global variable we
    # need to say this is the global version
    global a
    a = a + 1

def set_a_to_zero():
    # No global keyword means this variable is local
    a = 0

def print_a():
    # No editing means we can just reference 'a'
    print "The global value of 'a' is: ", a

def print_parameter_a(a):
	# because of scoping rules, Python 'sees' the parameter
	# instead of the global
    print "The value of the parameter 'a' is: ", a

print ""
print "The original value of a"
print_a()
print_parameter_a(10)
inc_global_a()

print ""
print "After incrementing the global variable"
print_a()
print_parameter_a(10)
set_a_to_zero()

print ""
print "After zeroing the local variable"
print_a()
print_parameter_a(10)
{% endhighlight %}


### Storing Calculator Memory

Scoping rules are very important, as we will see in this section, so we are able to access a global variable.

In the following example, we provide the ability to recall the most recent calculation.

{% highlight python %}
# our global last calculation variable
lastCalculation = -1

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
            # result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            # result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            # result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            # result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


def perform_calculation():
    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
    if(number1 == -1):
       return False

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    global lastCalculation
    lastCalculation = result

    print number1, operation, number2, "equals", result

    return True


stayInMenu = True
while stayInMenu:

    isInvalidInput = True
    while isInvalidInput:
        print "Hello, welcome to the awesome calculator program"
        print "These are your options:"
        print " 1. Perform calculations"
        print " 2. Print last calculation"
        print " 0. Exit program"

        menu_option = get_number_from_user("Please enter your menu option: ")

        if menu_option == 2 or menu_option == 1 or menu_option == 0:
            isInvalidInput = False
        else:
            print "Woops, you dun goofed. Please enter 0 or 1 as valid input"

    if(menu_option == 1):
        wantMoreCalculations = True
        while wantMoreCalculations:
            wantMoreCalculations = perform_calculation()
    elif(menu_option == 2):
        print "Your last calculation was ", lastCalculation
    elif(menu_option == 0):
        stayInMenu = False

{% endhighlight %}

Following the previous example, we need to tell Python that we want to access the global variable `lastCalculation`, so we then are able to bring it into scope, and assign to it.

### Storing Multiple Calculations

Storing only one calculation is a bit annoying. Instead, we want to store *all* our history - and to do this, we need to take advantage of *lists* (lists (also known as arrays): a sequence of particular items, in a given order). Lists are a great way of storing multiple values, without having to have a variable per item - which when we're running i.e. a large web server, we'll never know how much data we're going to be given.

**NOTE**: In our next session, we are going to play around with lists in much more depth; if you don't fully understand them for now, don't worry!

{% highlight python %}
# our global last calculation variable
# create a new empty list
lastCalculation = []

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
            # result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            # result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            # result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            # result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


def perform_calculation():
    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
    if(number1 == -1):
       return False

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)
    result = get_result(number1, number2, operation)

    global lastCalculation
    lastCalculation.append(result)

    print number1, operation, number2, "equals", result

    return True


stayInMenu = True
while stayInMenu:

    isInvalidInput = True
    while isInvalidInput:
        print "Hello, welcome to the awesome calculator program"
        print "These are your options:"
        print " 1. Perform calculations"
        print " 2. Print last calculation"
        print " 0. Exit program"

        menu_option = get_number_from_user("Please enter your menu option: ")

        if menu_option == 2 or menu_option == 1 or menu_option == 0:
            isInvalidInput = False
        else:
            print "Woops, you dun goofed. Please enter 0 or 1 as valid input"

    if(menu_option == 1):
        wantMoreCalculations = True
        while wantMoreCalculations:
            wantMoreCalculations = perform_calculation()
    elif(menu_option == 2):
        print "Your last calculations were: ", lastCalculation
    elif(menu_option == 0):
        stayInMenu = False

{% endhighlight %}

We create a new, empty list, to store our calculations in, and then every time we have a new result, we `append` it to the end of the list.

### Storing More Useful Data

We've previously only stored our previous calculations, but we can do better than that; we can store the actual values that created a given result.

To do this, we can't put every value inside the array, because we would then have no structure for the values. Luckily, there is a type called a *tuple* (tuple: a data structure consisting of multiple parts) which allows us to store numerous pieces of data in the same area. This is really useful because we'll be able to store our `number1`, `number2` and `operation` together, inside the array, as so:

```
array(
	tuple(
		number1 = 123,
		number2 = 12,
		operation = divide
		)
	,
	tuple(
		number1 = 9000,
		number2 = 1,
		operation = plus
	)
	,
	...
)
```
**NOTE**: In our next session, we are going to play around with tuples and iterating through lists in much more depth; if you don't fully understand them for now, don't worry!

{% highlight python %}
# our global last calculation variable
lastCalculations = []

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
            # result = number1 - number2
        elif(operation == "plus"):
            isInvalidInput = False
            # result = number1 + number2
        elif(operation == "divide"):
            if(number2 == 0):
                isZero = True
                while isZero:
                    print "Hey! You can't divide by zero, dummy"
                    number2 = get_number_from_user("Please enter the second number: ")
                    if number2 != 0:
                        isZero = False

            isInvalidInput = False
            # result = number1 / number2
        elif(operation == "multiply"):
            isInvalidInput = False
            # result = number1 * number2
        else:
            print "Woops, you didn't give me a valid operation ('plus' 'minus' 'divide' 'multiply')"

    return operation, number2


def perform_calculation():
    number1 = get_number_from_user("Please enter the first number (enter -1 to exit): ")
    if(number1 == -1):
       return False

    number2 = get_number_from_user("Please enter the second number: ")

    operation, number2 = get_operation_from_user(number2)

    global lastCalculations
    lastCalculation = (number1, number2, operation)
    lastCalculations.append(lastCalculation)

    output_result(number1, number2, operation)

    return True

def output_result(number1, number2, operation):
	# TODO: what should go here?!
	print "TODO: This function needs to be finished!"

stayInMenu = True
while stayInMenu:

    isInvalidInput = True
    while isInvalidInput:
        print "Hello, welcome to the awesome calculator program"
        print "These are your options:"
        print " 1. Perform calculations"
        print " 2. Print last calculation"
        print " 0. Exit program"

        menu_option = get_number_from_user("Please enter your menu option: ")

        if menu_option == 2 or menu_option == 1 or menu_option == 0:
            isInvalidInput = False
        else:
            print "Woops, you dun goofed. Please enter 0 or 1 as valid input"

    if(menu_option == 1):
        wantMoreCalculations = True
        while wantMoreCalculations:
            wantMoreCalculations = perform_calculation()
    elif(menu_option == 2):
        print "Your last calculations were:"

        for calculation in lastCalculations:
            number1 = calculation[0]
            number2 = calculation[1]
            operation = calculation[2]

            output_result(number1, number2, operation)
    elif(menu_option == 0):
        stayInMenu = False
{% endhighlight %}

We have a couple of key changes here:

- Create a new function called `output_result` to print out the result, given the variables required. However, you will need to implement it yourself!
- We create a local variable of type tuple (denoted by the `(number1,...)` syntax), to temporarily store our data, and then append it onto our `lastCalculations` list
- Finally, we actually output the value of the list. To do this, we *iterate* (iterate: repeat through a set of variable(s)) through our `lastCalculations` list, which loops through each tuple inside and prints out the values. **NOTE**: we will be covering this in more depth in our next session - don't worry if you don't understand it right now.

**Exercises:**

- Implement the `output_result` function so that it prints out in the format `"(number1) (operation) (number2) equals (result)"`
- Update the `output_result` function so that it takes in a tuple, opposed to each variable separately
