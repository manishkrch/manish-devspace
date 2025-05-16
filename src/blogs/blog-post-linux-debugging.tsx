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

const BlogPostLinuxDebugging: React.FC = () => (
  <>
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">Debugging Production Issues on Linux: My SRE Playbook</h2>
          <div className="meta mb-3"><span className="date">Published April 2025</span><span className="time">6 min read</span><span className="comment"><a href="#comments">8 comments</a></span></div>
        </header>
        <div className="blog-post-body">
          <figure className="blog-banner">
            <img className="img-fluid" src="/assets/images/blog/blog-post-thumb-2.jpg" alt="Linux Debugging" />
            <figcaption className="mt-2 text-center image-caption">Lessons from troubleshooting mission-critical Linux systems</figcaption>
          </figure>
          <p>Debugging Linux production issues is both an art and a science. Over the years, I’ve developed a playbook that helps me quickly diagnose and resolve incidents in high-stakes environments. This guide will walk you through my approach, tools, and real-world scenarios for effective Linux troubleshooting.</p>

          <h3>1. Stay Calm and Gather Context</h3>
          <ul>
            <li><strong>Clarify the problem:</strong> What changed? When did it start? Who is impacted?</li>
            <li><strong>Check monitoring dashboards:</strong> Look for spikes, errors, or unusual patterns in metrics and logs.</li>
            <li><strong>Communicate:</strong> Notify stakeholders, set expectations, and document your steps for transparency.</li>
          </ul>

          <h3>2. Essential Linux Debugging Tools</h3>
          <ul>
            <li><strong>top/htop:</strong> Real-time process and resource usage. Identify CPU or memory hogs instantly.</li>
            <li><strong>journalctl, dmesg, /var/log/*:</strong> System and application logs. Search for errors, warnings, and recent changes.</li>
            <li><strong>strace/ltrace:</strong> Trace system and library calls for stuck or crashing processes. Great for black-box debugging.</li>
            <li><strong>netstat/ss/lsof:</strong> Inspect network connections, open ports, and file handles.</li>
            <li><strong>ps, pstree:</strong> Visualize process hierarchies and zombie processes.</li>
            <li><strong>systemctl:</strong> Check and manage service status, restarts, and failures.</li>
          </ul>

          <h3>3. Real-World Debugging Scenarios</h3>
          <ul>
            <li><strong>High CPU or Memory:</strong> Use <code>top</code> and <code>ps aux --sort=-%mem</code> to find offenders. Check for memory leaks, runaway processes, or infinite loops.</li>
            <li><strong>Disk Full:</strong> <code>df -h</code> and <code>du -sh *</code> to locate large files or directories. Clean up logs, temp files, or orphaned data.</li>
            <li><strong>Network Issues:</strong> <code>ping</code>, <code>traceroute</code>, <code>ss -tuln</code> to diagnose connectivity, firewall, or DNS problems.</li>
            <li><strong>Service Down:</strong> <code>systemctl status</code> and <code>journalctl -xe</code> to find root causes, such as failed dependencies or permission errors.</li>
            <li><strong>File Descriptor Leaks:</strong> <code>lsof</code> and <code>ulimit -n</code> to check for resource exhaustion.</li>
          </ul>

          <h3>4. Mindset for Effective Troubleshooting</h3>
          <ul>
            <li><strong>Be methodical:</strong> Change one thing at a time and observe results. Avoid random guessing.</li>
            <li><strong>Let data guide you:</strong> Trust logs, metrics, and evidence over assumptions.</li>
            <li><strong>Document findings:</strong> Keep notes for future reference, postmortems, and team learning.</li>
            <li><strong>Ask for help:</strong> Don’t hesitate to escalate or consult teammates when stuck.</li>
          </ul>

          <h3>5. Automation and Prevention</h3>
          <ul>
            <li><strong>Automate log rotation and monitoring:</strong> Use tools like <code>logrotate</code> and Prometheus to catch issues early.</li>
            <li><strong>Configuration management:</strong> Tools like Ansible or Puppet ensure consistency and reduce manual errors.</li>
            <li><strong>Runbooks and postmortems:</strong> Invest in documentation and blameless reviews to improve over time.</li>
          </ul>

          <h3>Example: Debugging a Memory Leak</h3>
          <div style={codeBlockStyle}>
            <span style={commentStyle}># List top memory-consuming processes</span><br />
            <span style={keywordStyle}>ps</span> aux --sort=-%mem | <span style={keywordStyle}>head</span>
            <br /><br />
            <span style={commentStyle}># List open files for a specific process (replace &lt;PID&gt; with the process ID)</span><br />
            <span style={keywordStyle}>sudo lsof</span> -p &lt;PID&gt;
            <br /><br />
            <span style={commentStyle}># Check process memory status</span><br />
            <span style={keywordStyle}>grep</span> VmRSS /proc/&lt;PID&gt;/status
          </div>
          <p>In a recent incident, a web server was killed by the OOM killer. Using <code>ps</code> and <code>lsof</code>, I traced the leak to a runaway log file handler. Fix: rotate logs and patch the application.</p>

          <h3>Conclusion</h3>
          <p>Linux debugging is a core skill for any SRE or DevOps engineer. With the right tools, a calm mindset, and a systematic approach, you can resolve incidents quickly and build more resilient systems. Always learn from each incident to strengthen your playbook.</p>
        </div>
        <hr />
      </div>
    </article>
  </>
);

export default BlogPostLinuxDebugging;
