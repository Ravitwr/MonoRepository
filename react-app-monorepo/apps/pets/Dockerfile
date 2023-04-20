FROM nginx

RUN rm -rf /usr/share/nginx/html/*

# Copying our nginx.conf
COPY apps/pets/nginx.conf /etc/nginx/conf.d/default.conf


# Copying built assets from builder
COPY dist/apps/pets /usr/share/nginx/html