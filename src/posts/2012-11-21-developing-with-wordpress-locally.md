---
layout: post
title: Developing with WordPress locally
date: 2012-11-21 18:45:18.000000000 +00:00
categories:
    - Wordpress
tags:
    - local
    - mamp
    - mysql
    - PHP
    - wordpress
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>Up until earlier this year I'd been "going commando" by working directly on the servers using tools like Coda to save and upload straight away. I'd either set up a dev subdomain or work straight on the live site. I'd never really put a thought into developing locally or considered the benefits. The situation arose where I needed to, so recently I've been working with MAMP (Mac, Apache, MySQL, and PHP) installed on my machine. It includes everything you need to run a dynamic website from my local machine.</p>

<!--more-->

<p><a href="http://www.mamp.info/">Get MAMP</a></p>
<p>The advantages are great: you're basically recreating a server on your computer, which means as long as you're running MAMP, you don't need to be connected to the internet to work. If you're on the train home from work or 30,000 feet in the air you can still carry on working. It also eliminates the constant uploading that comes with working on the server, conserving bandwidth and speeding up the whole process considerably.</p>
<p><em>Note: If you load any of your files from a <abbr title="Content Delivery Network">CDN</abbr>, you'll need to download a hard copy.</em></p>

<h2>Downloading WordPress</h2>
<p>Download the latest version of WordPress from <a href="http://wordpress.org/">wordpress.org</a> and extract to your working directory. E.g. <code>/Users/yourname/Sites/wordpress</code>.</p>
<h2>Setting up a site</h2>
<p>For this post I'll be using MAMP Pro.</p>
<ol>
<li>Open up MAMP Pro and go to the Hosts tab.</li>
<li>Add a new host by clicking the plus icon at the bottom of the list.</li>
<li>Server name: This will be the address of the site e.g. <code>wordpress.dev</code><br />
You can name this whatever you like. Bear in mind if you specify an existing domain you'll be served the local version instead of the "live" version.</li>
<li>Disk location: Change this to the location of your working directory (<code>/Users/yourname/Sites/wordpress</code>).</li>
<li>Hit apply and you'll be prompted to restart the services.</li>
</ol>
<p>&nbsp;</p>
<figure><a href="/assets/Screen-Shot-2012-11-21-at-18.01.38.png"><img src="/assets/Screen-Shot-2012-11-21-at-18.01.38.png" alt="" /></a></figure>
<p>&nbsp;</p>
<p>Now when you visit <code>http://wordpress.dev/</code> in your browser you should see your site!</p>
<h2>Setting up the database</h2>
<p>Go back to your MAMP Pro window and go to the Server tab, then MySQL. Click Launch phpMyAdmin, which should open <abbr title="phpMyAdmin">PMA</abbr> in your browser.</p>
<p>From the <abbr title="phpMyAdmin">PMA</abbr> homepage, go to the Database tab and create a new database called <code>wordpress</code> with a collation of <code>utf8_unicode_ci</code>.</p>
<p>Go back to your host (<code>http://wordpress.dev/</code>) and enter the database details as follows:</p>
<p>Database Name: <code>wordpress<br />
</code>Username: <code>root<br />
</code>Password: <code>root</code> (you can change this under the MySQL tab in MAMP)<br />
Database Host: <code>localhost<br />
</code>Table Prefix: <code>wp_</code> (only change this if you want to run multiple WordPress installations from a single database)</p>
<p>Submit. You now you have a working copy of WordPress installed locally on your machine!</p>
