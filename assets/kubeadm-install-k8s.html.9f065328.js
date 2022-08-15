import{_ as n,b as s}from"./app.dd2c6e9a.js";const a={},e=s(`<h2 id="\u57FA\u672C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u73AF\u5883" aria-hidden="true">#</a> \u57FA\u672C\u73AF\u5883</h2><p>4\u53F0\u4E3B\u673A\u5982\u4E0B:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/hosts <span class="token operator">|</span><span class="token function">grep</span> home
<span class="token number">10.211</span>.55.9  home-01 <span class="token comment"># master</span>
<span class="token number">10.211</span>.55.5  home-02 <span class="token comment"># node</span>
<span class="token number">10.211</span>.55.11 home-03 <span class="token comment"># node</span>
<span class="token number">10.211</span>.55.12 home-04 <span class="token comment"># node</span>
</code></pre></div><p>\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># uname -a</span>
Linux home-01 <span class="token number">5.13</span>.0-25-generic <span class="token comment">#26~20.04.1-Ubuntu SMP Sat Jan 8 18:05:46 UTC 2022 aarch64 aarch64 aarch64 GNU/Linux</span>
<span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;20.04.3 LTS (Focal Fossa)&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span>ubuntu
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span>debian
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu 20.04.3 LTS&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;20.04&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://help.ubuntu.com/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.launchpad.net/ubuntu/&quot;</span>
<span class="token assign-left variable">PRIVACY_POLICY_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span>focal
<span class="token assign-left variable">UBUNTU_CODENAME</span><span class="token operator">=</span>focal
</code></pre></div><h2 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h2><p><strong>\u6CE8 (\u6240\u6709\u673A\u5668\u90FD\u9700\u8981\u6267\u884C)</strong></p><p><strong>\u4FEE\u6539\u4E3B\u673A\u540D\u5E76\u628A\u4E3B\u673A\u4FE1\u606F\u52A0\u5230 /etc/hosts \u6587\u4EF6\u4E2D</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># hostnamectl set-hostname {\u4E3B\u673A\u540D}</span>
</code></pre></div><p><strong>\u5173\u95ED swap</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># sudo swapoff -a</span>
</code></pre></div><p><strong>\u52A0\u8F7D\u5185\u6838\u6A21\u5757</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># modprobe br_netfilter</span>
</code></pre></div><p><strong>\u4FEE\u6539\u5185\u6838\u53C2\u6570 \u521B\u5EFA\u6587\u4EF6\u6DFB\u52A0\u5185\u5BB9</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># cat &lt;&lt; EOF &gt; /etc/sysctl.d/99-kubernetes-cri.conf</span>
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>
user.max_user_namespaces<span class="token operator">=</span><span class="token number">28633</span>
EOF
</code></pre></div><p><strong>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4F7F\u914D\u7F6E\u751F\u6548:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># sysctl -p /etc/sysctl.d/99-kubernetes-cri.conf</span>
</code></pre></div><p><strong>\u4FEE\u6539 DNS \u7981\u7528 systemd-resolved.service</strong></p><p>\u6B64\u5904\u624B\u52A8\u7BA1\u7406 /etc/resolv.conf</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># systemctl disable --now systemd-resolved.service</span>
<span class="token comment"># cat /etc/resolv.conf</span>
nameserver <span class="token number">114.114</span>.114.114
nameserver <span class="token number">8.8</span>.8.8
</code></pre></div><p><strong>\u5B89\u88C5 kubernetes \u8FD9\u91CC\u4F7F\u7528\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u6E90</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># apt-get update &amp;&amp; api install vim curl -y</span>
<span class="token comment"># apt-get install -y apt-transport-https</span>
<span class="token comment"># curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add -</span>
<span class="token comment"># cat &lt;&lt;EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list</span>
deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
EOF
<span class="token comment"># apt-get install -y kubelet kubeadm kubectl</span>
</code></pre></div><p><strong>\u5B89\u88C5\u5BB9\u5668\u8FD0\u884C\u65F6 Containerd \u8FD9\u91CC\u4F7F\u7528\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u6E90</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># // \u6DFB\u52A0\u76F8\u5173\u6E90 \u6211\u5728Macbook\u4E0A\u4F7F\u7528PD\u641E\u7684\u865A\u62DF\u673A \u8FD9\u5730\u65B9\u9700\u8981\u6539\u4E3A\u5BF9\u5E94\u67B6\u6784\u7684 arch=arm64</span>
<span class="token comment"># **sudo add-apt-repository &quot;deb [arch=arm64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="token comment"># // \u5378\u8F7D docker</span>
<span class="token comment">#** sudo apt-get remove docker-ce docker.io docker</span>
<span class="token comment"># // \u5B89\u88C5 containerd</span>
<span class="token comment"># sudo apt install containerd.io</span>
</code></pre></div><p><strong>\u751F\u6210 Containerd \u6240\u9700\u8981\u7684\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># mkdir -p /etc/containerd</span>
<span class="token comment"># containerd config default &gt; /etc/containerd/config.toml</span>
</code></pre></div><p><strong>\u4F7F\u7528 systemd \u4F5C\u4E3A\u5BB9\u5668\u7684 cgroup driver</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/containerd/config.toml</span>
<span class="token comment"># SystemdCgroup = true</span>
<span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.containerd.runtimes.runc<span class="token punctuation">]</span>
  <span class="token punctuation">..</span>.
  <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.containerd.runtimes.runc.options<span class="token punctuation">]</span>
    SystemdCgroup <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><p>\u914D\u7F6E <strong>Containerd</strong> \u5F00\u673A\u542F\u52A8\uFF0C\u5E76\u542F\u52A8 <strong>Containerd</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> containerd --now
</code></pre></div><h2 id="\u4F7F\u7528kubelet\u521D\u59CB\u5316\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528kubelet\u521D\u59CB\u5316\u96C6\u7FA4" aria-hidden="true">#</a> \u4F7F\u7528kubelet\u521D\u59CB\u5316\u96C6\u7FA4</h2><h3 id="\u5728master\u4E0A\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u5728master\u4E0A\u6267\u884C" aria-hidden="true">#</a> \u5728master\u4E0A\u6267\u884C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> kubeadm init --pod-network-cidr <span class="token number">172.16</span>.0.0/16  <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">10.211</span>.55.9 <span class="token punctuation">\\</span>
--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--cri-socket /run/containerd/containerd.sock
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> -i /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -g<span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre></div><p>\u521D\u59CB\u5316\u6210\u529F\u540E\u4F1A\u751F\u6210\u8282\u70B9\u52A0\u5165\u96C6\u7FA4\u7684\u547D\u4EE4 \u5728\u5176\u4ED6\u8282\u70B9\u4E0A\u6267\u884C\u8BE5\u547D\u4EE4</p><h3 id="\u5728node\u4E0A\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u5728node\u4E0A\u6267\u884C" aria-hidden="true">#</a> \u5728node\u4E0A\u6267\u884C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">10.211</span>.55.9:6443 --token mldghy.xtf4a0u9bw8ltsvu --discovery-token-ca-cert-hash sha256:2b0f87c543d77e0b8f843db47c95985febe17a19de747b064720097db9b9535c
</code></pre></div><h2 id="\u90E8\u7F72-flannel-\u7EC4\u4EF6-vxlan\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-flannel-\u7EC4\u4EF6-vxlan\u6A21\u5F0F" aria-hidden="true">#</a> <strong>\u90E8\u7F72 Flannel \u7EC4\u4EF6 (Vxlan\u6A21\u5F0F)</strong></h2><p>\u5728master\u4E0A\u6267\u884C</p><p>\u4E0B\u8F7D\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># wget https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml</span>
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 \u53EA\u4FEE\u6539 Network \u548C Backend Type</p><div class="language-bash ext-sh"><pre class="language-bash"><code>data:
  cni-conf.json: <span class="token operator">|</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cbr0&quot;</span>,
      <span class="token string">&quot;cniVersion&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0.3.1&quot;</span>,
      <span class="token string">&quot;plugins&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;flannel&quot;</span>,
          <span class="token string">&quot;delegate&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;hairpinMode&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;isDefaultGateway&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;portmap&quot;</span>,
          <span class="token string">&quot;capabilities&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;portMappings&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  net-conf.json: <span class="token operator">|</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.16.0.0/16&quot;</span>,
      <span class="token string">&quot;Backend&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vxlan&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
---
</code></pre></div><p>\u6267\u884C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># kubectl apply -f kube-flannel.yaml</span>
</code></pre></div><h2 id="\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B\u96C6\u7FA4\u72B6\u6001</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># kubectl get nodes -o wide</span>
NAME      STATUS   ROLES           AGE    VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
home-01   Ready    control-plane   15d    v1.24.0   <span class="token number">10.211</span>.55.9    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        Ubuntu <span class="token number">20.04</span>.3 LTS   <span class="token number">5.13</span>.0-25-generic   containerd://1.6.4
home-02   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          15d    v1.24.0   <span class="token number">10.211</span>.55.5    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        Ubuntu <span class="token number">20.04</span>.3 LTS   <span class="token number">5.13</span>.0-25-generic   containerd://1.6.4
home-03   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          15d    v1.24.0   <span class="token number">10.211</span>.55.11   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        Ubuntu <span class="token number">20.04</span>.3 LTS   <span class="token number">5.13</span>.0-25-generic   containerd://1.6.4
home-04   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          5d6h   v1.24.0   <span class="token number">10.211</span>.55.12   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        Ubuntu <span class="token number">20.04</span>.3 LTS   <span class="token number">5.13</span>.0-25-generic   containerd://1.6.4
</code></pre></div><h2 id="\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u6CE8" aria-hidden="true">#</a> \u6CE8:</h2><p>\u53EF\u4EE5\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u8BA9 kubelet \u5F00\u673A\u542F\u52A8</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> kubelet.service
</code></pre></div><p>\u6D89\u53CADNS\u95EE\u9898\u53EF\u4EE5\u8003\u8651\u5173\u6389DNS\u7BA1\u7406\u670D\u52A1</p><p>\u53C2\u8003<a href="https://icloudnative.io/posts/resolvconf-tutorial/" target="_blank" rel="noopener noreferrer">https://icloudnative.io/posts/resolvconf-tutorial/</a></p>`,52);function t(o,p){return e}var l=n(a,[["render",t],["__file","kubeadm-install-k8s.html.vue"]]);export{l as default};
