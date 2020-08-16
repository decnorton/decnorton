---
layout: post
title: Tamar GrowSmart - Data Structure
date: 2013-03-08 16:00:25.000000000 +00:00
categories:
    - dat202
    - tamar-growsmart
tags: []
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>Actually developing the app was a bit more of a struggle. I had to decide what kind of data structure to use. At first I thought about storing the data in an SQLite database seeing as Android supports it natively, but decided against it once I realised it was a bit overkill for our needs. Also, the lack of a decent GUI made it difficult for others to interact with it.</p>

<!--more-->

<p>In the end I decided to go with JSON. I've already got a fair bit of experience with JSON, and having used it in previous Android projects I knew where I stood with it. There are three JSON files included in the project files: items, allotments and producers. Each has a similar structure, making it easy to access. The fact that JSON is text-based and similar to JavaScript meant others could easily add new information. Here's an example from <code>items.json</code></p>
<pre class="language-javascript"><code>
{
	"items": [
		{
			"id": 1,
			"name": "Apples",
			"type": "fruit",
			"description": "Apples are probably the easiest tree fruit to grow and the most popular with gardeners. They require little attention and will continue to regrow every year. There are thousands of different types of apples, but they mainly fall into two categories: dessert apples for eating, which are sweet, and cooking apples for cooking, which are bitter! Some though can be put to both uses.",
			"planting": {
				"sow_indoors": null,
				"sow_outdoors": null,
				"sow_openground": "11,12,1,2,3",
				"plant": null,
				"harvest": "8,9,10"
			},
			"vsr": 1,
			"weeks_to_maturity": "32-38",
			"image": "apples",
			"selected": false
		},
		{ ... }
	]
}
</code></pre>
<p>Images were stored as resource files included in the app package and accessed programmatically using the <code>"image"</code> key in the item object.</p>
