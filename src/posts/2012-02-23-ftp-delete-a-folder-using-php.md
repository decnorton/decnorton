---
layout: post
title: FTP delete a folder using PHP
date: 2012-02-23 02:00:25.000000000 +00:00
categories:
    - Code
    - PHP
tags: []
status: publish
type: post
published: true
meta:
    superawesome: "false"
    _edit_last: "1"
    jabber_published: "1329962427"
    email_notification: "1329962431"
author: Dec Norton
comments: true
---

<p>Had to do this for a project recently. If you've any experience with FTP you'll know it's not the most efficient of protocols. If you want to make changes to a file or folder you have to deal with each file individually.</p>

<!--more-->

<p>In the case of removing a folder, you have to first make sure that it's empty and in order to do that you have to loop through each file and delete each one in turn.</p>
<p>Wanted to keep note of it somewhere and figured here was as good of a place as any!</p>
<pre class="language-php">
<code class="language-php">
function removeFolder($ftpConnection, $path) {
	static $log = "";
	$contents = ftp_nlist($ftpConnection, $path);
	if(!$contents){
		// Nothing in the folder
		ftp_rmdir($path);
		$log .= "Removed {$path}";
	} else {
		// Loop through each of the files
		foreach($contents as $currentFile) {
			if($currentFile != "." && $currentFile != "..") {
				// Assuming it's a folder and there's no dot in the name
				if (strpos($currentFile, '.') === false) {
					// It's a folder, so call itself
					removeFolder($ftpConnection, $path."/".$currentFile);
					// Once all files are gone delete the folder
					ftp_rmdir($ftpConnection, $path."/".$currentFile);
				} else {
					// If it's a file delete it
					ftp_delete($ftpConnection, $path."/".$currentFile);
				}
				$log .= "Removed {$path}/{$currentFile}n";
			}
		}
		ftp_rmdir($path);
	}
	return $log;
}
</code>
</pre>
