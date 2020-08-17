---
layout: post
title: Semantic App
date: 2012-12-16 20:11:50.000000000 +00:00
categories:
    - dat204
tags: []
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>For my Semantic app I decided to make a simple todo list application. It's all browser-based, meaning there's no communication with a server. It make use of a couple of HTML5 JavaScript APIs, including LocalStorage and FileReader.</p>
<p>Try it out here: <a href="https://todo.decnorton.com/">todo.decnorton.com</a></p>

<!--more-->

<figure><img alt="Screen Shot 2012-12-16 at 20.08.16" src="/assets/Screen-Shot-2012-12-16-at-20.08.16.png" /></figure>

<p>The backbone of the app was written in JavaScript, making using of the JavaScript prototype object to consolidate my methods. It's also supplemented by jQuery.</p>
<p>I started out with a fresh copy of the <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a> and stripped out the bits I didn't want or need.</p>
<p>A form at the top of the page lets you add new tasks. I'd originally intended to include a date option, but found the native date input a bit ugly and I didn't want to delve into creating my own or using a jQuery plugin. When a new task is added, it's put into an object that holds a unique id (using the uniqid function from php.js), the content, date (currently unused), timestamp (when it was created) and a boolean indicating whether it's been done or not.</p>
<pre class="language-javascript"><code>
var obj = {
	id : uniqid(),
	content: thing.val(),
	date: date.val(),
	timestamp: time(),
	done : false
}
todo.newTask(obj);
</code></pre>
<p>The new task is added to the task list and then added to the main app object (<code>todo.data</code>). The LocalStorage is updated with the new <code>todo.data</code> but LocalStorage doesn't natively support the storage of Objects so I had to extend the API to convert Objects to strings and store them.</p>
<pre class="language-javascript"><code>
Storage.prototype.setObject = function(key, value) {
	this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key) {
	var value = this.getItem(key);
	return value && JSON.parse(value);
}
</code></pre>
<p>Once the task is in the list, you have a few options. You can mark the task as done, you can edit the task content or you can delete the task.</p>
<p>Double clicking on the task adds a <code>contenteditable</code> tag to the content span and adds an onblur listener to it. When it's blurred the updateTask method is called and the data object updated.</p>
<p>You also have the ability to import and export the data as XML. Clicking the import button will bring up a modal dialog with the option to either paste in the XML or choose a file. Choosing a file will read the file using the JS FileReader API and load it into a string and import the data into the app. Similarly exporting the data will offer you the option to copy the text or download an XML file.</p>
<p>I used a CSS pre-processor called <a href="https://sass-lang.com/">SASS</a> to write the CSS. It adds a number of useful features that aren't native to CSS3, including variables, nesting, functions, and more.</p>
<p><a href="https://todo.decnorton.com/">todo.decnorton.com</a><br />
You can find the code on github: <a href="https://github.com/decnorton/todo">github.com/decnorton/todo</a></p>
