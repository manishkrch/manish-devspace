import React from 'react';

const BlogPostTerraformAzureAutomation: React.FC = () => (
  <>
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">Automating Cloud Infrastructure with Terraform & Azure</h2>
          <div className="meta mb-3"><span className="date">Published May 2025</span><span className="time">7 min read</span><span className="comment"><a href="#comments">12 comments</a></span></div>
        </header>
        <div className="blog-post-body">
          <figure className="blog-banner">
            <img className="img-fluid" src="/assets/images/blog/blog-post-thumb-1.jpg" alt="Terraform & Azure" />
            <figcaption className="mt-2 text-center image-caption">Automating cloud deployments with Terraform and Azure Resource Manager</figcaption>
          </figure>
          <p><strong>Terraform</strong> is a leading Infrastructure-as-Code (IaC) tool that enables you to define, provision, and manage Azure resources using declarative configuration files. This post is a comprehensive guide to automating Azure infrastructure with Terraform, including best practices, code samples, and real-world DevOps tips.</p>

          <h3>Why Use Terraform for Azure Automation?</h3>
          <ul>
            <li><strong>Consistency & Repeatability:</strong> Deploy the same infrastructure across dev, test, and prod with confidence.</li>
            <li><strong>Change Management:</strong> Preview and validate changes before applying, reducing risk of outages.</li>
            <li><strong>Collaboration:</strong> Version control your infrastructure, enabling team collaboration and code reviews.</li>
            <li><strong>Automation:</strong> Integrate with CI/CD pipelines for hands-off deployments.</li>
          </ul>

          <h3>Key Terraform Providers for Azure</h3>
          <ul>
            <li><strong>AzureRM:</strong> The main provider for managing Azure resources (VMs, storage, networking, etc.).</li>
            <li><strong>AzAPI:</strong> For accessing the latest Azure features via direct ARM API calls.</li>
            <li><strong>AzureAD:</strong> Manage Azure Active Directory users, groups, and applications.</li>
            <li><strong>AzureDevOps:</strong> Automate DevOps projects, pipelines, and permissions.</li>
          </ul>

          <h3>Step-by-Step: Automating Azure with Terraform</h3>
          <ol>
            <li><strong>Install Terraform:</strong> Use the official installer or Azure Cloud Shell for a ready-to-go environment.</li>
            <li><strong>Authenticate:</strong> Use a service principal for automation. Example:
              <pre><code>az ad sp create-for-rbac --name "terraform-sp" --role="Contributor" --scopes="/subscriptions/xxxx-xxxx-xxxx-xxxx"</code></pre>
            </li>
            <li><strong>Write Configuration:</strong> Example to deploy a resource group:
              <pre><code>{`provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "example" {
  name     = "rg-demo"
  location = "East US"
}`}</code></pre>
            </li>
            <li><strong>Plan & Apply:</strong>
              <pre><code>terraform init
terraform plan
terraform apply</code></pre>
            </li>
            <li><strong>Automate in CI/CD:</strong> Integrate these steps into your pipeline (e.g., GitHub Actions, Azure DevOps).</li>
          </ol>

          <h3>Code Block Example: Module for Azure Storage</h3>
          <pre><code>{`module "storage" {
  source              = "Azure/storage-account/azurerm"
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location
  account_tier        = "Standard"
  account_replication_type = "LRS"
}`}</code></pre>

          <h3>Real-World DevOps Tips</h3>
          <ul>
            <li>Use <strong>remote state</strong> (Azure Storage) to share state between team members and pipelines.</li>
            <li>Leverage <strong>modules</strong> for reusable infrastructure patterns.</li>
            <li>Tag resources for cost management and governance.</li>
            <li>Validate changes with <code>terraform plan</code> in pull requests before merging.</li>
            <li>Document your code and use variables for flexibility.</li>
          </ul>

          <h3>Common Pitfalls & How to Avoid Them</h3>
          <ul>
            <li><strong>State file drift:</strong> Always use remote state and lock it during deployments.</li>
            <li><strong>Manual changes in Azure Portal:</strong> Avoid making changes outside Terraform to prevent drift.</li>
            <li><strong>Provider version mismatches:</strong> Pin provider versions in your configuration.</li>
            <li><strong>Secrets management:</strong> Use Azure Key Vault and never hardcode secrets in code.</li>
          </ul>

          <h3>Table: Terraform vs. ARM Templates</h3>
          <table className="table table-striped my-5">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Terraform</th>
                <th>ARM Templates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Language</td>
                <td>HCL (HashiCorp)</td>
                <td>JSON</td>
              </tr>
              <tr>
                <td>Modularity</td>
                <td>Modules</td>
                <td>Linked Templates</td>
              </tr>
              <tr>
                <td>State Management</td>
                <td>Yes (remote/local)</td>
                <td>No (stateless)</td>
              </tr>
              <tr>
                <td>Multi-Cloud</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>

          <h3>Quote Example</h3>
          <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
            <p className="mb-2">“Infrastructure as Code is not just about automation, it’s about enabling collaboration and repeatability at scale.”</p>
            <footer className="blockquote-footer">Cloud Engineering Principle</footer>
          </blockquote>

          <h3>Conclusion</h3>
          <p>Terraform and Azure together empower teams to deliver reliable, scalable, and auditable cloud infrastructure. By following best practices and automating your workflows, you can accelerate delivery and reduce operational risk. Start small, iterate, and scale your automation as your cloud footprint grows.</p>
        </div>
        <hr />
      </div>
    </article>
  </>
);

export default BlogPostTerraformAzureAutomation;
