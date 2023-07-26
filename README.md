# UI for JakeBladt.codes

This is the primary repository for the static website JakeBladt.codes. It is to be created via the following method:

* Create a github repo for this project.
* Create an AWS CodeDeploy workflow to copy this code to a specific S3 bucket each time the **main** branch is updated.
* Establish a CloudFront integration to expose that S3 bucket as a static website.
* Setup a domain to point to that CloudFront integration.
* Establish a proper SSH certificate to allow HTTPS access.
