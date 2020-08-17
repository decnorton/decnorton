---
layout: post
title: Arduino + PureData
date: 2013-02-20 15:09:31.000000000 +00:00
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

<p>Today, we got to play around with getting PureData again. We managed to get an Arduino to interface with PureData, allowing us to use sensors to control the audio output of our PureData patch.</p>

<!--more-->

<p>We managed to hook 4 force sensing resistors up to an Arduino using a breadboard and pulled the readings into PureData using <a href="https://at.or.at/hans/pd/objects.html">Pduino</a> in PD and Firmata on the Arduino.</p>
<figure><a href="/assets/IMG_20130220_142846.jpg"><img src="/assets/IMG_20130220_142846.jpg" alt="IMG_20130220_142846" width="1024" height="768" class="alignnone size-large wp-image-416" /></a><br />
<figcaption>The Arduino</figcaption>
</figure>
<p>Here's a video of it in action:</p>
<p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Vl__jNvYqAQ" frameborder="0" allowfullscreen></iframe>
</p>
<p>The synth patch combines a phasor and oscillator to create the sound. By multiplying the sawtooth of the phasor with the sine wave of the oscillator we get a kind of tremolo effect.</p>
<p>The phasor takes a value between 0 and 127 and the oscillator between 0 and 10. The force resistors gave us a max value of 0.5, so we had to scale them accordingly.</p>
<p>Here what the PD patches looked like:</p>
<figure><a href="/assets/Screen-Shot-2013-02-20-at-14.10.59-copy.png"><img src="/assets/Screen-Shot-2013-02-20-at-14.10.59-copy.png" alt="Screen Shot 2013-02-20 at 14.10.59 copy" width="651" height="764" class="alignnone size-full wp-image-412" /></a><br />
<figcaption>Pduino Patch</figcaption>
</figure>
<figure><a href="/assets/Screen-Shot-2013-02-21-at-15.14.38-copy.png"><img src="/assets/Screen-Shot-2013-02-21-at-15.14.38-copy.png" alt="Screen Shot 2013-02-21 at 15.14.38 copy" width="724" height="1024" class="alignnone size-large wp-image-413" /></a><br />
<figcaption>Mini-synthesizer</figcaption>
</figure>
