# UI for JakeBladt.codes

This is the primary repository for the static website JakeBladt.codes. It is to be created via the following method:

* Create a github repo for this project.
* Establish a CloudFront distribution to expose that S3 bucket as a static website.
* Setup a domain to point to that CloudFront distribution.
* Establish a proper SSH certificate to allow HTTPS access.
* Create a workflow to update an S3 bucket each time the **main** branch of the repo is updated and issue an invalidation against the CloudFront distribution.
