---
description: Configuring Nginx Proxy
---

# Configuring Nginx

To achieve optimal performance performance, you need to configure nginx

```bash
server {
        listen 80 http2;
        server_name Yourdomain.ru;
        location / {
                root /path/to/updates;
        }
        location /api {
                proxy_pass http://127.0.0.1:9274/api;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        location /webapi/ {
                proxy_pass http://127.0.0.1:9274/webapi/;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
```
