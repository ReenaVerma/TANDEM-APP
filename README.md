# Tandem App Code Test (Responsive)
The default Gatsby starter.

## URLS:
There are two pages when this test:
<ul>
  <li>Home - which is a replica of the design within the task folder.
  <br />http://localhost:8000/
  </li>
  <li>Test - which is a Test Variant of the Homepage.
  <br>http://localhost:8000/Test/
  </li>
</ul>

## Client Side ReactJS Set Up:

<ul>
  <li>All modules used in this test sit within ```src/components```.
  </li>
  <li>All modules used within the Test Variant page, sit within ```src/components/test-variant```.</li>
  <li>SCSS sits within ```src/layouts/components```, broken up into multiple files, which are all referenced in index.scss.</li>
  <li>The Homepage is located ```src/pages/index.js```.</li>
  <li>The Test Variant is located ```src/pages/Test.js```</li>
  <li>Images sit in ```public/static/images```.</li>
  <li><strong>Please note: </strong>The Test Variant page, was a separate/customised SCSS file, from the rest of the test.  Located at ```src/layouts/components/test-variant.scss```</li>
  <li></li>
</ul>

-------------------------------------------------


## AB Test Variant: http://localhost:8000/Test/

### 1) Drive more acquisition through stronger CTA placement:
For the AB Test, I've produced a design/wireframe, which has the main goal of driving more traffic/acquisition to the Tandem Credit Card register page.

The original design only has one CTA to "Apply Now", which is below the fold.  

So the new variant provides a more intuitive UX, where the CTA is above the fold.  This would naturally, increase clickthroughs to the next page.


<p align="center"><img src="https://i.imgur.com/ai3aQfZ.jpg" width="90%"></p>


### 2) Drive more acquisition through less clutter:

The original design is very text heavy above the fold.  It makes the page less engaging to a user.  Users scan web pages and shorter, snappier content is more ideal, for a header page placement.

Likewise, users can connect more to stunning visual images, as opposed to text heavy real estate.

So having a travel related background image, (target audience for the card), as well as removing the copy clutter, should also help to drive more traffic to key sign up pages.

### 3) Drive more acquisition utilising the nav bar

A small change to test, but adding in the word "Apply", to the navigation.  So again, utilising as many spots as possible, to drive higher rates of acquisition.

<p align="center"><img src="https://i.imgur.com/yyHw0H7.png" width="60%"></p>


### 4) Better content hierarchy

The Credit Card benefits in this test variant, is secondary to the "Apply Now" CTA.  So I've kept the bullet points, but utilised a product image and turned the "More information" link, into a button.

So similarly, enhancing content visually and with clearer CTAs.

<p align="center"><img src="https://i.imgur.com/gBKlCKx.jpg" width="90%"></p>


### 5) Clearer benefits

This test variant better highlights the APR figures/benefits.  Tertiary to the rest of the page, but stands out more, through use of yellow divs and larger white text.


<p align="center"><img src="https://i.imgur.com/yBmfGSz.png" width="90%"></p>


-------------------------------------------------

## Install:

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Download the entire zip or fork from Github.
```sh
https://github.com/ReenaVerma/TANDEM-APP
```

Once installed locally, run the following command to run the test on your local server:8000.
```sh
gatsby develop
```
