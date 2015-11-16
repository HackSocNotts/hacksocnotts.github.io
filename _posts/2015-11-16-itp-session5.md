---
layout: post
title: Introduction to Python Programming - Session 5 Catchup
author: Jamie Tanna (HackSoc 2015-16 General Secretary)
excerpt: <p>Lists, Tuples and Zombies.</p>
---

### Lists, Glorious Lists

As we briefly touched upon last session, lists are a great way to work with multiple variables, without having separate variables assigned for each one. We're also able to store different bits of data in them, such as `mixed_list` in the below example:

{% highlight python %}
names = ["Rich", "Jamie", "Luke", "Harry", "Gregor"]
hair = ["Brown", "Red", "Ginger", "Green", "Brown"]
mixed_list = [1, "hello", 1.235, 12*10, ("Hellooooo", 123)]

print names
print hair
print mixed_list


for name in names:
    print "Our new name is", name
for hair_colour in hair:
    print "Our new hair colour is", hair_colour
{% endhighlight %}

Remember from last time that the syntax for `list`s is using square brackets, `[` to start a list, `]` to end it, and commas to separate each individual value.

In the first set of `print` statements, we print out the values of the lists in one go, which Python does with the same syntax as we use to create them.

In the second set of print statements, we are going to iterate through each value of the list. This is called a `for loop`, and the syntax makes it much easier for us to go through each element individually. The value of `name` is reset at each point in the loop with the value of the next element in the list.

*Note:* I may use the term `array` in place of the term `list`. For these tutorials, they are interchangeable - so please don't be confused if I use either.

**Exercises:**

- Create a for loop that iterates through `mixed_list` and prints out each element.

### Accessing the List Elements Directly

Luckily we don't always have to iterate through the whole list, but we can instead access the element at a given position.

Before we look at how, one point to always remember about working with `list`s is that they are *zero-indexed* (zero-indexed: instead of starting counting at one, we start at zero). As with all modern programming languages, we start counting from zero; there is no point wasting space in the computer's memory to start counting from one like 'normal'.

Therefore, if we wanted to access elements of the list, we would do something like:

{% highlight python %}
names = ["Rich", "Jamie", "Luke", "Harry", "Gregor"]

print "The first name is", names[0]
print "The second name is", names[1]
print "The fourth name is", names[3]
{% endhighlight %}

Note that the syntax follows that of how we create lists - we use the square brackets.

Because of the way that we can access individual elements, we can also use a loop counter inside our for loop to access the elements directly, like so:

{% highlight python %}
names = ["Rich", "Jamie", "Luke", "Harry", "Gregor"]
hair = ["Brown", "Red", "Ginger", "Green", "Brown"]
mixed_list = [1, "hello", 1.235, 12*10, ("Hellooooo", 123)]

print names
print hair
print mixed_list

loop_counter = 0
print names[3]

for name in names:
    hair_colour = hair[loop_counter]
    print "Hello my name is", name, "and I have", hair_colour, "hair"
    loop_counter = loop_counter + 1
{% endhighlight %}

As we can see here, we're iterating through the `names` list, and using our `loop_counter` to access the elements of `hair_colour`. But this isn't ideal as we're mixing accessing styles, which does not make sense. To clean this up, we're going to access both through the loop counter, which will be generated with the Python function `range`. `range` is a really useful function which, given an integer, creates a list of the numbers up to, but not including, the given integer. For instance:

```
>>> range(1)
[0]
>>> range(10)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> range(30)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
>>> range(3)
[0, 1, 2]
```

Therefore, we can then use the following code to iterate through both lists. The previous version is shown as a comparison.

{% highlight python %}
names = ["Rich", "Jamie", "Luke", "Harry", "Gregor"]
hair = ["Brown", "Red", "Ginger", "Green", "Brown"]
mixed_list = [1, "hello", 1.235, 12*10, ("Hellooooo", 123)]

print names
print hair
print mixed_list

loop_counter = 0
for name in names:
    hair_colour = hair[loop_counter]
    print "Hello my name is", name, "and I have", hair_colour, "hair"
    loop_counter += 1

for loop_counter in range(5):
    name = names[loop_counter]
    hair_colour = hair[loop_counter]
    print "Hello my name is", name, "and my hair is", hair_colour, "colour"

{% endhighlight %}

We use the temporary variables in the loop for readability, but we could just as simply used the list access syntax instead.

Note the `+=` shorthand for incrementing our `loop_counter`.

### Magic Numbers are the Devil

In the above code, we've hardcoded in the number `5` as the length of the list - this is a terrible idea, because every time we increase the size of the list, we need to remember to update the value stored there. Additionally, when reading back over the code we may not instantly work out what the `5` refers to. This is referred to as a *magic number* (magic number: "unique values with unexplained meaning") and using magic numbers is very bad when maintaining code, and should instead be replaced by a variable which explains what it means, for instance:

{% highlight python %}
...
LENGTH_OF_LIST = 5
for loop_counter in range(LENGTH_OF_LIST):
    name = names[loop_counter]
    hair_colour = hair[loop_counter]
    print "Hello my name is", name, "and my hair is", hair_colour, "colour"
{% endhighlight %}

As we can see, the choice of variable name makes it very easy to understand what the value indicates. However, we will still need to remember to update it as soon as we change the list. Therefore, we will instead use the `len` function, which gives us the length of a given `list`:

{% highlight python %}
for loop_counter in range(len(names)):
    name = names[loop_counter]
    hair_colour = hair[loop_counter]
    print "Hello my name is", name, "and my hair is", hair_colour, "colour"
{% endhighlight %}

This version will then let us adapt to a changing `list` length much more easily, and means we don't have to update our variable when the `list` changes. While this may seem trivial in this example, when we get to a larger program, we will have potentially tens of lists and variables to update, and it'll get a bit too much to remember every time.

### Reducing the Number of Lists

As we can see in our code, the `names` and `hair` lists are very tightly coupled - we will always have an entry in one for the other. Therefore, having two variables stored is not ideal. To get around this, we will use tuples, which we again briefly touched on last session, which are a data structure that allows us to store multiple values (be it two or two hundred) i.e. pairs of coordinates. In our example, we will pair a person's name with their hair colour, as such:

{% highlight python %}
people = [('Rich', 'Brown'), ('Jamie', 'Red'), ('Luke', 'Ginger'), ('Harry', 'Green'), ('Gregor', 'Brown')]
print people

PERSON_LIST_NAME = 0

number_of_people = len(people)
for loop_counter in range(number_of_people):

    (name, hair_colour) = people[loop_counter]
    print "Hello my name is", name, "and my hair is", hair_colour, "colour"

    person = people[loop_counter]
    print "Hello, this is: ", person
    print "Hello, this is", person[PERSON_LIST_NAME], "with hair colour", person[1]
{% endhighlight %}

There are a few things we're doing here. Firstly, the syntax for a tuple is the same as a pair of coordinates - parentheses around the values, and commas separating them.

You will see there are two methods of accessing the tuple values - firstly, we capture the values in the same way as we get multiple return types from a function, just with the added parentheses. Secondly, we index into the tuple, in the same syntax as we index into `list`s. Both methods work identically, and are purely down to preference.

### Exercises

Here we had a break for you to implement the following:

1. Take a name from the user
2. Check the `list` of people for their name
3. When you find their name, print out their hair colour
4. Bonus points: Error checking! What if there isn't someone by that name?

The answer is intentionally not given, so you have to work to implement it yourself.

### PyZork: The All-Star Spelling Conundrum

*Name taken from [Video Game Name Generator](http://videogamena.me/).*

At the end of the session, we started to create a text-based adventure game. This is our last exercise before we move to Flask, and aims to summarise all the work we've done so far.

You can see below the initial skeleton (pun intended) for the game:

{% highlight python %}
from sys import exit

def get_str_from_user(prompt):
    input = raw_input(prompt)
    input = str(input)
    return input

def dead(why):
    print "You dead."
    print "..."
    print "How?", why
    sys.exit(0)

def zombies():
    dead("You get eaten by zombies")


def start():
    print "You wake up in your room"
    print "You look down and notice a dirty rag on your foot"
    print "What will you do?"

    isInRoom = True

    while isInRoom:
        # if
        # .. in
        print ""
        print "'pickup' the rag"
        print "turn on the 'lights'"
        print "go to 'sleep'"
        print "look for an 'exit'"

        inp = get_str_from_user("What will you do?")

        if inp == "pickup":
            print "You gain one rag. Lucky you"
        elif inp == "lights":
            print "Well done /s"
            room_lights()
        elif inp == "sleep":
            zombies()
        elif inp == "exit":
            print "You're in the dark, you can't find an exit"

def room_lights():
    print "You can see a door"
    print "What will you do?"

    isInRoom = True

    while isInRoom:
        print ""
        print "'exit'"
        print "go to 'sleep'"

        inp = get_str_from_user("What will you do?")

        if inp == "exit":
            # TODO where next?
            pass

start()
{% endhighlight %}

### Homework

Yes, you've been set homework this week! It's to design and start to implement your own game, following the structure above. This will you a chance to get ahead, and make the session a lot easier, as we'll be carrying on your work and finishing the game. Once finished, we'll play them live!
