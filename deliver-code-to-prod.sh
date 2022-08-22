yarn build && mv build html && rsync -a ./html admin@10.4.40.3:/usr/share/nginx && rm -rf html
