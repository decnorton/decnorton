---
layout: post
title: WordPress Database From Multiple Hosts
date: 2012-11-21 20:27:33.000000000 +00:00
categories:
    - Wordpress
tags: []
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>As I discussed in a previous post, I like to develop locally using MAMP. This means I keep two separate copies, a development version locally, and a release version on the server. <a href="http://decnorton.com/2012/11/developing-with-wordpress-locally/">See my previous post for info on how to set up WordPress using MAMP.</a></p>

<!--more-->

<p>When you're running your development copy, you'll often want it to use the content from your live site. That's fine, we can connect to our live database from our local version no problem (providing your MySQL server allows remote access), the problems lies within the WordPress configuration. Within the WordPress configuration you are given two options relating to the URL of your site:</p>
<p>WordPress Address - the location of the WordPress core files. Example: <code>http://example.com/wordpress/</code><br />
Site Address - your site's root URL. Example: <code>http://example.com</code></p>
<p>These values are stored in the database, meaning if your database is set up for your live site but you're trying to run it from your local site, you'll get all sorts of problems occurring.</p>
<p>We can get around that by doing the following:</p>
<ol>
<li>Go into <code>/wp-includes/</code> and open up <code>option.php</code>.</li>
<li>Find <code>get_option()</code> (should be near the top of the file).</li>
<li>Insert the following at the very top of the function, just after any variable definitions. It should look like this:
<pre class="language-php"><code>function get_option( $option, $default = false ) {
	global $wpdb;

    if ($option == "siteurl" || $option == "home") {
    	/* Are we looking at dev site? */
    	if (strpos($_SERVER["SERVER_NAME"], "example.dev") !== false)
    	   return "http://example.dev";
    }
    /* Continue as normal if we aren't looking at the dev site */

</code></pre>

</li>
</ol>
<p>This allows us to keep an exact duplicate of the code both locally and on the server.</p>
