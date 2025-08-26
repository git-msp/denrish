provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "denrish_bucket" {
  bucket = "denrish-mahendra-s3-${random_id.suffix.hex}"
  acl    = "private"
}

resource "random_id" "suffix" {
  byte_length = 4
}

