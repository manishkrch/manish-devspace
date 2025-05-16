import React from 'react';

const codeBlockStyle: React.CSSProperties = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  background: '#272822',
  color: '#f8f8f2',
  padding: '1rem',
  fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.95rem',
  overflowX: 'auto',
  marginBottom: '1.5rem',
};
const keywordStyle: React.CSSProperties = {
  color: '#66d9ef',
  fontWeight: 600,
};
const commentStyle: React.CSSProperties = {
  color: '#75715e',
  fontStyle: 'italic',
};

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
            <li><strong>Authenticate:</strong> Use a service principal for automation. Example:</li>
          </ol>
          <div style={codeBlockStyle}>
            <span style={commentStyle}># Create a service principal for Terraform automation</span><br />
            <span style={keywordStyle}>az</span> ad sp create-for-rbac --name <span style={{color:'#a6e22e'}}>&quot;terraform-sp&quot;</span> --role=<span style={{color:'#a6e22e'}}>&quot;Contributor&quot;</span> --scopes=<span style={{color:'#a6e22e'}}>&quot;/subscriptions/xxxx-xxxx-xxxx-xxxx&quot;</span>
          </div>
          <ol start={3}>
            <li><strong>Write Configuration:</strong> Example to deploy a resource group:</li>
          </ol>
          <div style={codeBlockStyle}>
            <span style={commentStyle}># main.tf</span><br />
            <span style={keywordStyle}>provider</span> <span style={{color:'#a6e22e'}}>&quot;azurerm&quot;</span> {'{'}<br />
            &nbsp;&nbsp;<span style={keywordStyle}>features</span> {'{}'}<br />
            {'}'}<br /><br />
            <span style={keywordStyle}>resource</span> <span style={{color:'#a6e22e'}}>&quot;azurerm_resource_group&quot;</span> <span style={{color:'#a6e22e'}}>&quot;example&quot;</span> {'{'}<br />
            &nbsp;&nbsp;<span style={keywordStyle}>name</span> = <span style={{color:'#a6e22e'}}>&quot;rg-demo&quot;</span><br />
            &nbsp;&nbsp;<span style={keywordStyle}>location</span> = <span style={{color:'#a6e22e'}}>&quot;East US&quot;</span><br />
            {'}'}
          </div>
          <ol start={4}>
            <li><strong>Plan & Apply:</strong></li>
          </ol>
          <div style={codeBlockStyle}>
            <span style={keywordStyle}>terraform</span> init<br />
            <span style={keywordStyle}>terraform</span> plan<br />
            <span style={keywordStyle}>terraform</span> apply
          </div>
          <ol start={5}>
            <li><strong>Automate in CI/CD:</strong> Integrate these steps into your pipeline (e.g., GitHub Actions, Azure DevOps).</li>
          </ol>

          <h3>Code Block Example: Module for Azure Storage</h3>
          <div style={codeBlockStyle}>
            <span style={commentStyle}># storage.tf</span><br />
            <span style={keywordStyle}>module</span> "storage" {'{'}<br />
            &nbsp;&nbsp;<span style={keywordStyle}>source</span> = <span style={{color:'#a6e22e'}}>&quot;Azure/storage-account/azurerm&quot;</span><br />
            &nbsp;&nbsp;<span style={keywordStyle}>resource_group_name</span> = <span style={{color:'#a6e22e'}}>&quot;${'{'}azurerm_resource_group.example.name{'}'}&quot;</span><br />
            &nbsp;&nbsp;<span style={keywordStyle}>location</span> = <span style={{color:'#a6e22e'}}>&quot;${'{'}azurerm_resource_group.example.location{'}'}&quot;</span><br />
            &nbsp;&nbsp;<span style={keywordStyle}>account_tier</span> = <span style={{color:'#a6e22e'}}>&quot;Standard&quot;</span><br />
            &nbsp;&nbsp;<span style={keywordStyle}>account_replication_type</span> = <span style={{color:'#a6e22e'}}>&quot;LRS&quot;</span><br />
            {'}'}
          </div>
        </div>
        <hr />
      </div>
    </article>
  </>
);

export default BlogPostTerraformAzureAutomation;
