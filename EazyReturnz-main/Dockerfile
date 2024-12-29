# Use NGINX base image
FROM nginx:alpine

# Copy HTML, CSS, and JS files to NGINX web root
COPY ./*.html /usr/share/nginx/html/
COPY ./*.css /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Command to start NGINX server
CMD ["nginx", "-g", "daemon off;"]
