---
layout: post
title: Arduino RFID & Accelerometer
date: 2013-01-16 18:37:31.000000000 +00:00
categories:
    - dat206
tags: []
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>Got the chance to play with a couple of new sensors in today's 206 session. Starting out getting an accelerometer to work, turns out it's pretty simple and spits out some usable values. More excitingly we got to play with RFID tags and readers.</p>

<!--more-->

<figure><a href="/assets/photo-3.jpg"><img src="/assets/photo-3.jpg" alt="Arduino w/ RFID reader" width="1024" height="768" class="alignnone size-large wp-image-378" /></a></figure>
<p>Once we got the reader hooked up and reading the tags properly we were able to explore potential uses. We added a relay and told it to switch on whenever a tag was read. This could be extended to perform different functions for different tags but we didn't get that far.</p>
<p><a href="/assets/rfid.ino">Code</a></p>
