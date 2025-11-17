FROM nginx:alpine
LABEL org.opencontainers.image.source="https://github.com/jeffbalagosa/learn-us-states-by-map"

# remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# copy built site (assumes a local `dist/` exists in the repo root)
COPY dist/ /usr/share/nginx/html/

# custom nginx config for SPA fallback
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
