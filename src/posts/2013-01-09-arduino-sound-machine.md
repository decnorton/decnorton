---
layout: post
title: Arduino "Sound Machine"
date: 2013-01-09 23:48:19.000000000 +00:00
categories:
    - dat206
tags:
    - arduino
    - sound machine
status: publish
type: post
published: true
meta:
    _edit_last: "1"
author: Dec Norton
comments: true
---

<p>First DAT206 session of the year and we're already getting stuck into Arduino. Today we made a basic "sound machine" using a light sensor and a buzzer. We read the light sensor value and told the buzzer to go off if the value dropped below 200 (ranges from 0 to 800ish).</p>

<!--more-->

<pre class="language-arduino"><code>int sensor = A0;
int sensorValue = 0;

int buzzer = 3;
int buzzerValue = 35;


void setup() {
  pinMode(sensor, INPUT);
  pinMode(buzzer, OUTPUT);

  Serial.begin(14400);
}

void loop() {
  sensorValue = analogRead(sensor);
  Serial.println(sensorValue);

  if(sensorValue < 200) {
    analogWrite(buzzer, buzzerValue);
  } else {
    analogWrite(buzzer, 0);
  }

  delay(200);
}
</code></pre>
