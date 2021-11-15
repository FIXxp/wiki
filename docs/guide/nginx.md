---
description: Настройка проксирования Nginx
---

# Настройка nginx

Для достижения оптимальной производительности отдачи файлов нужно настроить Nginx
<CodeGroup>
  <CodeGroupItem title="no SSL" active>

```bash
server {
        listen 80;
        server_name ВАШДОМЕН.ru;
        location / {
                root /путь/до/updates;
        }
        location /api {
                proxy_pass http://127.0.0.1:9274/api;
                proxy_set_header Host $host;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Real-IP $remote_addr;
        }
        location /webapi {
                proxy_pass http://127.0.0.1:9274/webapi;
                proxy_set_header Host $host;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Real-IP $remote_addr;
        }
}
```

  </CodeGroupItem>
    <CodeGroupItem title="SSL">

```bash
server {
        listen 80 http2;
        server_name ВАШДОМЕН.ru;
        location / {
                root /путь/до/updates;
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

  </CodeGroupItem>
</CodeGroup>
