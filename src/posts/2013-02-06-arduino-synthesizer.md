---
layout: post
title: Arduino Synthesizer
date: 2013-02-06 17:53:35.000000000 +00:00
categories:
- dat206
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
author: Dec Norton
comments: true
---
<p>Today we made a synthesizer using an Arduino and a five potentiometers.</p>

<!--more-->

<p>We started with a breadboard and connected the potentiometers' ground and 5V to the board's outputs and connected the middle pin from each potentiometers to an analog input on the board. These would be our five control knobs. Then we connected a small speaker to the Arduino so we could hear the output.</p>
<p>We used <a href="http://code.google.com/p/tinkerit/wiki/Auduino">Auduino</a> to generate the sounds with the Arduino.</p>
<figure><a href="/assets/2013-02-06-13.35.49.jpg"><img src="/assets/2013-02-06-13.35.49.jpg" alt="2013-02-06 13.35.49" width="1024" height="768" class="alignnone size-large wp-image-404" /></a></figure>
<p>After getting this working, we experimented with replacing a couple of the potentiometers with a light sensor and a force sensor, which allowed us to create some interesting sound patterns.</p>
