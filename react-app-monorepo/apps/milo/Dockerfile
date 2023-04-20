FROM nginx

RUN rm -rf /usr/share/nginx/html/*

# Copying our nginx.conf
COPY apps/milo/nginx.conf /etc/nginx/conf.d/default.conf


# Copying built assets from builder
COPY dist/apps/milo /usr/share/nginx/html