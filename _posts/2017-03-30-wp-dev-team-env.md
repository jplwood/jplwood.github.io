---
layout: post
title:  "A WordPress Dev Environment for Small Teams and Little Time"
date:   2017-03-30
category: code
comments: true
image:
  feature: meeting.jpg
tags: [programming]
---

Last year I participated in Madison Wisconsin's second annual Design Like Mad event as both a developer and the point person for the nonprofit I was working at. 

<!--more-->

We applied to have a new website built for our organization. Assuming it wouldn't be completed in a day, it was determined that I'd head up planning and development as I would be the person to take it over after this one-day, 12-hour event. We got paired up with two programmers and two designers. I knew we were going to develop a WordPress theme, but I'd only ever worked on WordPress locally on my own. The trick with developing a WordPress site with others in a short period of time is that you need to keep both the code base, and the database in sync. After reading and doing some research and picking a starting point, this is the process I came up with.

# The Tools We Went With

### Local WordPress

**[MAMP](https://www.mamp.info/en/) -** Most WordPress tutorials will probably mention MAMP, or some other prepackaged AMP (Apache MySQL PHP) package, but MAMP has come a long way in the last 5 years. It now works on both Mac and Windows, and it is dead simple to spin up a local server for your WordPress install.

**[Bones Theme](https://github.com/eddiemachado/bones) -** This lightweight starter WordPress theme gave us a big head start, getting a lot of basic WordPress theme dev work out of the way. *There are many other [great boilerplate themes](http://www.wpbeginner.com/wp-themes/21-best-wordpress-starter-themes-for-developers/).*

**[Compass.app](http://compass.kkbox.com/) -** Only found out about this useful little Sass tool through the Bones theme, but, unless you're a Node.js build tools ninja, Compass.app is a very simple to use tool to preprocess your `.scss` Sass files into `.css`. You just have to set it up once to point to the folder where your `.scss` files are, then start it up any time you're programming to watch for changes. Builds on the fly. *By no means necessary, just found it useful.*

### Keeping your Code In Sync

**[GitHub](https://github.com/) -** We used Git and GitHub to keep our code base in sync. I set up a repository beforehand and invited the team to join and grab the WordPress install.

### Keeping your DB in Sync

**Development Server -** We had hosting with GoDaddy so beforehand, I set up a `dev.` subdomain where I put a new WordPress Install (a click of a button with GoDaddy). Then, using FTP (I use [FileZilla]()), just blanket copy up the folder for your new theme (i.e., the boilerplate theme that you're now using and probably renamed). This development server nice to continually copy the latest code up and show it off to any stakeholders (e.g., the director of the nonprofit you're developing for). Even more crucial though, your dev server provides a hosted place to keep your database in sync.

**[WP Sync DB](https://github.com/wp-sync-db/wp-sync-db) -** This excellent, open-source plugin is where the data migration magic happens. It is the tiniest bit confusing at first to make sure you have things pointing in the right directions, but once you get it set up (you can save configs), it's easy-peasy. You'll need to install this plugin both locally and up on the development server. In it, you'll be able to, using hash keys, pull and push data. So as people start flooding your snazzy new WordPress site with content, downloading plugins and cruisin' along, you can easily pull in the latest database changes to match the latest code you're getting from GitHub!

This is sort of a catalogue for myself to remember this, but also I put it together in hopes that others might find it useful. May update it in the future. Comment with questions or ideas!