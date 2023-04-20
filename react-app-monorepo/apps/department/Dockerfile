FROM nginx

RUN rm -rf /usr/share/nginx/html/*

# Copying our nginx.conf
COPY apps/department/nginx.conf /etc/nginx/conf.d/default.conf


# Copying built assets from builder
COPY dist/apps/department /usr/share/nginx/html