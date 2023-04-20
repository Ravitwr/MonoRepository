FROM nginx

RUN rm -rf /usr/share/nginx/html/*

# Copying our nginx.conf
COPY apps/result/nginx.conf /etc/nginx/conf.d/default.conf


# Copying built assets from builder
COPY dist/apps/result /usr/share/nginx/html