#Specify the source image from where this image has to be created

FROM alpine

#Step 2: Download and install dependency

RUN apk add --update redis

#Step 3: Tell the image what to do when it starts a container

CMD ["redis-server"]



