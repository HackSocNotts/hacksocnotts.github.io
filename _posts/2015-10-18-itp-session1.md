---
layout: post
title: Introduction to Python Programming - Session 1 Catchup
author: Jamie Tanna (HackSoc 2015-16 General Secretary)
excerpt: <p>Missed our first 'Intro to Python Programming' session? We've got you covered.</p>
---

Hey Hacksoc,

So whether you missed our session last week, or you just want to brush up on it again, we've got a catchup session here.

If you're already set up with Python and Atom, you can [skip to the programming](#programming-in-python), otherwise get started below:

### Setting up your machine

So first things first, you'll need to install the following:

- [Python 2.7](https://www.python.org/download/releases/2.7/)
	- This installer sets everything up that you'll need to write and run the Python applications we're creating in the first half of the sessions
- [Atom Text Editor](https://github.com/atom/atom/releases/)
	- Atom is a text editor which allows you to write all your Python code - but that's not all it does. A great thing about Atom is that it provides *syntax highlighting* (syntax highlighting: you will get colour-coded text which makes it much more easy to work with your code. See [the code in basic calculator](#basic-calculator) for an example of what syntax highlighting looks like). Although you can use any editor, we recommend Atom as having everyone using the same one will make things much easier for teaching, and will also allow you to share tips and tricks with your friends when you get to playing around with it.

#### <a name="setup-windows-path"></a>Windows

You'll also need to [set up your PATH](http://stackoverflow.com/a/4621277).

### Getting used to the command line

#### Windows

Navigate to the Start Menu, then type "Command Prompt" and press enter when the icon appears. For a graphical walkthrough, check out [WikiHow's tutorial on it](http://www.wikihow.com/Open-the-Command-Prompt-in-Windows).

There are three commands you will need to know:

- `dir` - List the current directory. This will tell you what is in the folder you're currently in.
- `cd` - Change the current directory. This will let you move around your filesystem
	- `cd ..` - Change to the parent directory
	- `cd Desktop\Hacksoc-Python` - Change to the folder `Hacksoc-Python` inside the folder `Desktop`
- `mkdir` - Make a directory. This will let you create your folder structure needed to get your code organised

First we want to get to the `Desktop`, where we'll store our folder. Note that you can store it in your `Documents`, or anywhere, just as long as it's in one central place you can easily get to.

![Getting to the desktop](/img/itp-s1-cd-desktop-win.png)

Then we want to create our folder to be organised.

![Making a new folder](/img/itp-s1-desktop-mkdir-win.png)

![Making a new folder (part 2)](/img/itp-s1-desktop-mkdir-2-win.png)

Finally, an example of running a Python script.

![Running a Python script from the command line](/img/itp-s1-python-win.png)

#### Mac

Navigate to the *Applications* folder, then to *Utilities*, then double click on the *Terminal* application.

There are three commands you will need to know:

- `ls` - List the current directory. This will tell you what is in the folder you're currently in.
- `cd` - Change the current directory. This will let you move around your filesystem
	- `cd ..` - Change to the parent directory
	- `cd Desktop/Hacksoc-Python` - Change to the folder `Hacksoc-Python` inside the folder `Desktop`
- `mkdir` - Make a directory. This will let you create your folder structure needed to get your code organised

First we want to get to the `Desktop`, where we'll store our folder. Note that you can store it in your `Documents`, or anywhere, just as long as it's in one central place you can easily get to.

![Getting to the desktop](/img/itp-s1-cd-desktop-mac.png)

Then we want to create our folder to be organised.

![Making a new folder](/img/itp-s1-desktop-mkdir-mac.png)

We then want to change directory into that folder, and create the file.

![Running a Python script from the command line](/img/itp-s1-python-mac.png)

Finally, we want to run that file.

![Running a Python script from the command line](/img/itp-s1-python-run-mac.png)

### <a name="programming-in-python"></a>Programming in Python

We started off by showing you guys some code, and asked you to try it yourself. 

To test it, you will need to put each code fragment into a new file in Atom - make sure to give it a good filename, such as: `helloworld.py`, `basiccalculator.py`. Also aim to have a meaningful folder structure, such as:

```
python-programming
└── session1
    ├── basiccalculator.py
    ├── helloname.py
    └── helloworld.py
```

Even though the code snippets are very short, **do not** copy-paste them! You need to learn to write it out yourself - programming is all about getting a feel for the language and making your own mistakes.

Then to run it, you will need to go into your terminal, `cd` to the correct directory, and finally run `python $filename` where `$filename` is the file name and extension, i.e. `helloworld.py`. Note that filenames are case sensitive - meaning `HelloWorld.py` must be run as `python HelloWorld.py`.

If this does not work, and you are running on Windows, check out the [Windows extra setup instructions](#setup-windows-path).

#### Your first program

The below program will be your first Python program. All it does is print\* (`print`: a common programming term for sending text to the terminal) out the *string* (string: sequence of characters, enclosed in `""`) `"Hello World"` to the terminal. This example is the [most common first program in programming](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) - giving the user the quickest way to test the language.

{% highlight python %}
print "Hello World"
{% endhighlight %}

**Exercises:**

- What sort of things can Python `print` out?
- Can you print out numbers?
- Can you print out more `string`s?


#### Getting some input

In the following example, we're going to ask the user for input, and then print our a welcome message. You will notice that the program waits until the user has entered some text, and pressed the enter key.

{% highlight python %}
name = raw_input("Please enter your name: ")
  
print "Hello", name
{% endhighlight %}

`name` here is a *variable*, which is a concept that allows us to reuse values, and create more useful code. As we can see above, we "assign" `name` the value of `raw_input("Please enter your name")`, which is input from the user.

The statement `print "Hello", name` prints the text `Hello`, followed by the data stored in the variable `name`. The comma between the two denotes that the `"Hello"` and the value stored in `name` are to be space separated.

**Exercises:**

- what's the difference between `name = raw_input()` and `name = raw_input("Please enter your name")`?

#### <a name="basic-calculator"></a>Building something a bit more useful

The following program is an incredible feat of programming knowledge - we've worked out how to create a basic calculator! The following program will ask for two numbers, then print out the value of the two numbers added up.

{% highlight python %}
# basic calculator
number1_input = raw_input("Please enter the first number: ")
number2_input = raw_input("Please enter the second number: ")

number1 = int(number1_input)
number2 = int(number2_input)

# + addition
# - subtraction
# / division
# * multiplication
print number1 + number2
{% endhighlight %}

Note the line indicating `input = int(number1_input)` - this is called *casting* (casting: coercing a variable of one type to another). In programming, variables usually have a *type* (type: a classification identifying what valid data can be put into it [[1]]) such as:

- `string`: a sequence of characters
- `int` or `integer`: a whole number
- `float`: a decimal number

The reason we have to cast is because `number1_input` is actually a `string`. You can test this with the code in the [Working With Types section](#working-with-types). Therefore we need to force it to become an integer to add them.

The lines that start with a hash, such as `# basic calculator`, are called *comments* (comments: a programmer-readable annotation in the source code of a computer program [[2]]). These are not interpreted by the computer and are solely there to explain things to the coder - for instance why something is the way it is.

**Exercises**:

- What happens if you remove the casting, and instead try and just run `number1_input + number2_input`?
- Try and use the different operations (in the second lot of comments) to perform different outcomes.
	- What happens if you divide by zero?
	- Or multiply by a negative number?
- Change the output, so you get a response in the format `72 * 12 = 864` when given the numbers `72` and `12`. Adapt it so it works with all operations.
- For the two numbers, output each of the different operations possible - so if given `1` and `2`, output what `1+2`, `1-2`, `1*2` and `1/2` are.
- What happens if we try to output a fraction? I.e. `1/2`? Can you find a way to output it correctly?


#### <a name="working-with-types"></a> Working With Types

To illustrate the different types we've talked about so far, and how we're able to create variables of those types.

{% highlight python %}
string_data = raw_input("Please enter some text here")
print type(string_data)

int_data = 1234
print type(int_data)

float_data = 3.14159
print type(float_data)

{% endhighlight %}

Note that we don't explicitly need to do anything to create the variables of a different type - Python is clever enough to know what type each variable need be.

[1]: https://en.wikipedia.org/wiki/Data_type
[2]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
