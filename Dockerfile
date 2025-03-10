# docker build --platform linux/amd64 -t nima-ai-web .
# docker build -t nima-ai-web .
# docker run -d -p 8081:80 nima-ai-web
# docker tag nima-ai-web jamiekyu/nima-ai-web:latest
# docker push jamiekyu/nima-ai-web:latest

# Use a lightweight web server image
FROM nginx:alpine

# Copy the HTML file to the appropriate directory
COPY app/index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80
