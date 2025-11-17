Docker / Compose instructions

This project ships a pre-built `dist/` folder (static site). The files here let you build a small nginx image that serves the `dist` contents.

Build the image with Docker:

```bash
# build image (runs locally, reads the repo's dist/)
docker build -t learn-us-states-by-map:latest .

# run container and map host port 8080 -> container 80
docker run --rm -p 8080:80 learn-us-states-by-map:latest
````markdown
Docker / Compose instructions

This project ships a pre-built `dist/` folder (static site). The files here let you build a small nginx image that serves the `dist` contents.

Build the image with Docker:

```bash
# build image (runs locally, reads the repo's dist/)
docker build -t learn-us-states-by-map:latest .

# run container and map host port 8081 -> container 80 (8080 is already taken on this server)
docker run --rm -p 8081:80 learn-us-states-by-map:latest
```

Or use docker-compose (recommended for convenience):

```bash
docker compose up --build -d
# then open http://localhost:8081
```

Notes
- The Docker image copies the repository `dist/` directory at build time. Make sure `dist/` exists and contains the built site.
- If you prefer live-reload during development, you can bind-mount `./dist` into the container by editing `docker-compose.yml` (a sample is commented).
- I couldn't run Docker here — please run the commands above on your Linux Mint machine.
- Want the stack to start automatically after reboots? Copy `systemd/learn-us-states-by-map.service` to `/etc/systemd/system/`, update `WorkingDirectory`, then run `sudo systemctl enable --now learn-us-states-by-map.service`.

Systemd (auto-start) setup
--------------------------
1. Place the repo in a long-term path on the server (e.g., `/opt/learn-us-states-by-map`) and ensure `dist/` is built.
2. Copy the service template:
	```bash
	sudo cp systemd/learn-us-states-by-map.service /etc/systemd/system/
	```
3. Edit `/etc/systemd/system/learn-us-states-by-map.service`:
	- Set `WorkingDirectory=` to your repo path.
	- Adjust the `ExecStart`/`ExecStop` commands if `docker` or `docker compose` live somewhere else.
4. Reload systemd and enable the service so it launches at boot:
	```bash
	sudo systemctl daemon-reload
	sudo systemctl enable --now learn-us-states-by-map.service
	```
5. Check status anytime with `systemctl status learn-us-states-by-map.service`. Systemd will now run `docker compose up --build` during boot and stop it with `docker compose down` when the service stops.

The `restart: unless-stopped` rule in `docker-compose.yml` already tells Docker to restart the container when the daemon restarts. The systemd unit ensures the compose stack itself is launched automatically after a full OS reboot.

````
