---
layout: post
title: Zombies vs Wizards
date: 2013-03-22 16:56:29.000000000 +00:00
categories:
    - dat204
tags: []
status: publish
type: post
published: true
author: Dec Norton
comments: true
---

<p>A few things have changed since my last post on this, we have now changed the title to Wizards vs Zombie. The game mechanics are largely the same, it's still a top-down shooter, but the player can now roam the whole map.</p>
<!--more-->
<p>We've each been given different roles within the team:</p>
<p>Me - JavaScript/Canvas<br>
Andy - Website<br>
Kieran - Sound<br>
Mike - Graphics</p>
<p>Trying to develop a game using Canvas was much more of a challenge than I'd imagined. I've used AS3 and Flash to build a game before, but Canvas doesn't provide a lot of the luxuries you get with Flash, such as events, layering and collision detection. I researched a couple of JS libraries intended for game development with Canvas, but not of them met my needs so I decided to start completely from scratch.</p>
<p>I started with a basic Game class with a draw function which I then looped using <code>requestAnimationFrame</code>. I started planning my classes and methods to try and make the code somewhat structured, despite my efforts it still ended up a bit messy but most importantly it works! Audio was implemented using the WebAudio API, which was relatively simple; and the HUD was done with inline SVG.</p>
<p>The biggest challenge I faced was most definitely collision detection. I first set out to get pixel-perfect detection working by drawing each object on to it's own offscreen canvas and comparing values of each pixel before drawing it on the game canvas. I quickly gave up on this idea as I couldn't get my head around it and it wasn't necessary for such a simple game. I ended up generating a bounding box for each object and checking for overlaps. This seems to work fine.</p>
<p>The rest was relatively easy, though it's still missing a couple of features we'd hoped to include, such as a high score system and more varied gameplay. Overall I'm happy with the outcome!</p>
<p><a href="https://game.decnorton.com/">Play the game &rarr;</a></p>
<figure>
<a href="/assets/Screen-Shot-2013-03-22-at-16.55.51.png"><img src="/assets/Screen-Shot-2013-03-22-at-16.55.51.png" alt="Game with bounding boxes shown" width="802" height="502" class="alignnone size-full wp-image-453" /></a><br>
</figure>
