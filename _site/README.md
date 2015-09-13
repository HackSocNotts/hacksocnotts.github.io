# HackSoc 2015/16 site


To replace : http://www.hacksocnotts.co.uk/

## How to Contribute

* Install Jekyll http://jekyllrb.com/docs/installation/ 
    * `gem install jekyll`
* Fork this repo
	* [Github Docs: Fork a Repo](https://help.github.com/articles/fork-a-repo/)
* Clone that repo
	* `git clone https://github.com/<your_username>/HackSocNotts.github.io`
* **Make changes**
	* See below for workflow!
* Make a pull request


## How to write a blog post!

* Add a file to [/_posts/](https://github.com/HackSocNotts/HackSocNotts.github.io/tree/master/_posts)
* Name this file `yyyy-mm-dd-name-of-post.md` e.g. `2013-04-15-Space-Apps-London.md`
* Add this header to the top of the file
```
   ---
   layout: post
   title: Name of Post
   
   feature-img: "img/sample_feature_img.png" # Note if you dont want a header image, delete this line
   ---
```
* Run Jekyll to locally test
	* `jekyll serve`
	* Browse to [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
* Once happy with your post, commit the changes
	* `git add <blog_file>` i.e. `git add _posts/2013-04-15-Space-Apps-London.md`
	* `git commit -m "Added post about Hacksoc storming SpaceApps London"`

## Created with Jekyll

A free and open-source blogging platform [Jekyll](http://jekyllrb.com).
