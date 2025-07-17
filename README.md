## Github Self-Hosted Runner

**Demonstrate CI/CD Automation with Custom GitHub Actions Runner**

---

### 🚀 Project Overview

A robust, scalable, and secure **self-hosted GitHub Actions runner** designed to power high-performance **CI/CD pipelines** for modern **backend development**, **DevOps**, and **Cloud Engineering** workflows. Leverage this solution to optimize compute resources, enforce custom security policies, reduce runtime costs, and integrate seamlessly with container orchestration platforms.

**Key Use Cases:**

* **Backend Developer**: Accelerate build, test, and deployment cycles for **Node.js**, **Python**, **Go**, and **Java** services.
* **DevOps Engineer / SRE**: Manage **infrastructure as code (IaC)**, implement **continuous integration**, **continuous deployment**, and monitor **high-availability** runners.
* **Platform Engineer**: Orchestrate self-hosted runners across **AWS**, **Azure**, **GCP**, **Kubernetes**, and on-premise servers.

---

### 🔑 Core Features

* **CI/CD Automation** using **GitHub Actions** with custom runner registration
* **Scalability & Reliability**: Horizontal scaling, load-balanced runners, auto-registration
* **Security & Isolation**: Granular access control, network isolation, encrypted communication
* **Cost Optimization**: Eliminate per-minute billing, leverage existing compute infrastructure
* **Container Support**: Dockerized runner images, integration with **Kubernetes** and **Docker Swarm**
* **Monitoring & Logging**: Plug into **Prometheus**, **Grafana**, **ELK Stack**, or any **REST API**

---

### 🛠️ Technology Stack & Keywords

* **Languages & Frameworks:** Node.js, JavaScript, Bash, REST API, JSON
* **CI/CD & DevOps:** GitHub Actions, Self-Hosted Runner, Pipeline Automation, YAML
* **Infrastructure:** AWS EC2, Azure VM, GCP Compute Engine, Kubernetes, Docker, Terraform, Ansible
* **Containerization:** Docker, Kubernetes, Helm Charts, Docker Compose
* **Security & Compliance:** OAuth, PAT, TLS, SSH, IAM Roles, VPC
* **Monitoring:** Prometheus, Grafana, ELK, CloudWatch, Logging, Metrics, Observability
* **SRE & Platform:** High Availability, Auto-Scaling, Disaster Recovery, Infrastructure as Code (IaC)

---

### 📥 Installation & Setup

1. **Prerequisites**:

   * Linux/Windows/macOS Server with Docker and Git installed
   * GitHub Personal Access Token (PAT) with `repo`, `admin:repo_hook` scopes

2. **Clone Repository**:

   ```bash
   git clone https://github.com/yagyagoel1/Github_selfHostedRunner.git
   cd Github_selfHostedRunner
   ```

3. **Configure Environment Variables** (.env):

   ```ini
   GITHUB_URL=https://github.com/<owner>/<repo>
   RUNNER_NAME=custom-runner-01
   RUNNER_TOKEN=<YOUR_PAT_TOKEN>
   RUNNER_WORKDIR=_work
   ```

4. **Launch Runner**:

   ```bash
   ./run.sh
   ```

5. **Verify Registration**:

   * Check GitHub Repo Settings ▶ Actions ▶ Runners

---

### 📋 Usage Example

Once configured, include the self-hosted runner in your workflow YAML:

```yaml
name: Build & Deploy Backend
on: [push]
jobs:
  build:
    runs-on: [self-hosted, linux]
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm ci
      - name: Run Tests
        run: npm test
      - name: Docker Build & Push
        uses: docker/build-push-action@v3
        with:
          context: .
          push: true
```

---

### 🚥 CI/CD Pipeline Integration

* **Custom Docker Image**: Build a Docker image of this runner for repeatable deployments.
* **Auto-Registration Scripts**: Use Terraform `null_resource` or Ansible playbooks to auto-provision and register runners.
* **Kubernetes DaemonSet**: Deploy a DaemonSet to ensure each node auto-registers a runner instance.

---

### 🛡️ Security Best Practices

* Restrict runner permissions to required repositories
* Use **IAM Roles** and secure storage for PATs
* Enable **network isolation** (VPC, firewall rules)
* Regularly update runner binaries and Docker images

---

### 📈 Scaling & Monitoring

* **Horizontal Scaling**: Deploy multiple runner instances with load-balancing
* **Metrics Exporter**: Expose `/metrics` endpoint for Prometheus scraping
* **Log Aggregation**: Centralize logs with ELK Stack or AWS CloudWatch Logs

---

### 🤝 Contributing & Community

Contributions, feature requests, and bug reports are welcome! Please open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit changes (`git commit -m 'Add awesome feature'`)
4. Push branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

### 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

### 📬 Contact

Yagya Goel • [GitHub Profile](https://github.com/yagyagoel1) • [yagya.goel@example.com](mailto:yagyagoel87@gmail.com)
