import{_ as s,c as n}from"./app.303e8697.js";const a={},o=n(`<h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><ol><li>\u901A\u8FC7\u7EFF\u76DF\u5B89\u5168\u626B\u63CF Centos7 \u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5747\u68C0\u6D4B\u5230OpenSSH\u4E0D\u540C\u7A0B\u5EA6\u7684\u4E2D\u3001\u9AD8\u98CE\u9669\u6F0F\u6D1E\uFF1B</li><li>\u9274\u4E8E\u5B98\u7F51\u6CA1\u6709\u4E3ACentos7 \u63D0\u4F9B\u66F4\u65B0<code>openssh</code>\u76F8\u5173\u7684RPM\u5B89\u88C5\u5305\uFF1B\u4E3A\u63D0\u9AD8 Centos7 \u64CD\u4F5C\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF0C\u5C06 Centos7 \u4E2D\u7684 <code>OpenSSH</code>\u7EDF\u4E00\u7F16\u8BD1\u5347\u7EA7\u5230\u6307\u5B9A\u7248\u672C\uFF1A<code>OpenSSH 8.6p1</code>\uFF0C\u4EE5\u6B64\u6765\u4FEE\u590D<code>OpenSSH</code>\u5B89\u5168\u6F0F\u6D1E</li><li>\u56E0\u6D89\u53CA\u6F0F\u6D1E\u7684\u751F\u4EA7\u73AF\u5883\u4E0D\u80FD\u4E0A\u7F51\uFF0C\u53EA\u6709\u5185\u7F51\u73AF\u5883\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u5355\u72EC\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u5236\u4F5C<code>OpenSSH 8.6p1</code> RPM\u5B89\u88C5\u5305\uFF0C\u518D\u628A\u6B64\u5B89\u88C5\u5305\u653E\u5230\u751F\u4EA7\u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u5B89\u88C5\u3002\u53E6\u5916\u4E00\u4E2A\u65B9\u6848\u5C31\u662F\u4E0B\u8F7D<code>OpenSSH 8.6p1</code> \u6240\u9700\u8981\u7684\u4F9D\u8D56\u5305\u7136\u540E\u5728\u751F\u4EA7\u73AF\u5883\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6B64\u65B9\u6848\u6BD4\u8F83\u9EBB\u70E6 \u6682\u65F6\u4E0D\u8003\u8651\u4F7F\u7528\u3002</li></ol><p>\u64CD\u4F5C\u7CFB\u7EDF\uFF1ACentOS Linux release 7.8.2003 (Core)</p><h2 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h2><p><strong>\u4E0B\u8F7D</strong> openssh <strong>\u6E90\u7801\u5305</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> https://openbsd.hk/pub/OpenBSD/OpenSSH/portable/openssh-8.6p1.tar.gz
<span class="token function">wget</span> https://src.fedoraproject.org/repo/pkgs/openssh/x11-ssh-askpass-1.2.4.1.tar.gz/8f2e41f3f7eaa8543a2440454637f3c3/x11-ssh-askpass-1.2.4.1.tar.gz
</code></pre></div><p><strong>\u5B89\u88C5 RPM \u7F16\u8BD1\u5DE5\u5177\u53CA\u76F8\u5173\u4F9D\u8D56\u5305</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> -y rpm-build zlib-devel openssl-devel gcc perl-devel pam-devel
</code></pre></div><p><strong>\u521B\u5EFA RPM \u7F16\u8BD1\u73AF\u5883</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/
<span class="token function">mkdir</span> -p rpmbuild/<span class="token punctuation">{</span>SOURCES,SPECS,RPMS,SRPMS,BUILD,BUILDROOT<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5C06</strong> openssh <strong>\u4F9D\u8D56\u6587\u4EF6\u590D\u5236\u5230\u5BF9\u5E94\u73AF\u5883\u4E2D</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u6E90\u7801\u5305
<span class="token function">cp</span> /root/openssh-8.6p1.tar.gz /root/rpmbuild/SOURCES/
<span class="token function">cp</span> /root/x11-ssh-askpass-1.2.4.1.tar.gz /root/rpmbuild/SOURCES/
<span class="token function">tar</span> -zxf /root/openssh-8.6p1.tar.gz -C /opt/
// \u4F9D\u8D56\u6587\u4EF6
<span class="token function">cp</span> /opt/openssh-8.6p1/contrib/redhat/openssh.spec /root/rpmbuild/SPECS/
// \u6388\u6743
<span class="token function">chown</span> sshd:sshd /root/rpmbuild/SPECS/openssh.spec
</code></pre></div><p><strong>\u5B9A\u5236</strong> <code>/etc/pam.d/sshd</code> <strong>\u6587\u4EF6</strong></p><p>\u56E0\u4E3A\u5982\u679C\u4F7F\u7528 openssh \u63D0\u4F9B\u7684 sshd \u4F1A\u6709\u53EF\u80FD\u5BFC\u81F4\u5B89\u88C5\u540E\u767B\u9646\u4E0D\u4E0A\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u8FD8\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7684 sshd \u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /root/rpmbuild/SOURCES/sshd

<span class="token comment"># \u5C06\u4EE5\u4E0B\u5185\u5BB9\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\u4E2D</span>

<span class="token comment">#%PAM-1.0</span>
auth       required     pam_sepermit.so
auth       substack     password-auth
auth       include      postlogin
<span class="token comment"># Used with polkit to reauthorize users in remote sessions</span>
-auth      optional     pam_reauthorize.so prepare
account    required     pam_nologin.so
account    include      password-auth
password   include      password-auth
<span class="token comment"># pam_selinux.so close should be the first session rule</span>
session    required     pam_selinux.so close
session    required     pam_loginuid.so
<span class="token comment"># pam_selinux.so open should only be followed by sessions to be executed in the user context</span>
session    required     pam_selinux.so <span class="token function">open</span> env_params
session    required     pam_namespace.so
session    optional     pam_keyinit.so force revoke
session    include      password-auth
session    include      postlogin
<span class="token comment"># Used with polkit to reauthorize users in remote sessions</span>
-session   optional     pam_reauthorize.so prepare
</code></pre></div><p><strong>\u4FEE\u6539</strong> <code>openssh.spec</code> <strong>\u914D\u7F6E</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>cd <span class="token operator">/</span>root<span class="token operator">/</span>rpmbuild<span class="token operator">/</span>SPECS<span class="token operator">/</span>

vim openssh<span class="token punctuation">.</span>spec

<span class="token comment"># \u627E\u5230\u5982\u4E0B\u8FD9\u884C \u5E76\u6CE8\u9500\u8BE5\u884C \u8981\u4E0D\u5728\u68C0\u6D4B\u7684\u65F6\u5019\u4F1A\u62A5\u9519</span>
<span class="token comment">#BuildRequires: openssl-devel &lt; 1.1</span>

<span class="token comment"># \u627E\u5230\u5982\u4E0B\u8FD9\u884C \u5E76\u5C060\u6539\u4E3A1</span>

<span class="token comment"># Do we want to disable building of x11-askpass? (1=yes 0=no)</span>
<span class="token operator">%</span><span class="token keyword">global</span> no_x11_askpass <span class="token number">1</span>

<span class="token comment"># \u627E\u5230\u5982\u4E0B\u8FD9\u884C \u5E76\u5C060\u6539\u4E3A1</span>

<span class="token comment"># Do we want to disable building of gnome-askpass? (1=yes 0=no)</span>
<span class="token operator">%</span><span class="token keyword">global</span> no_gnome_askpass <span class="token number">1</span>

<span class="token comment"># \u627E\u5230\u5982\u4E0B\u8FD9\u884C \u539F\u914D\u7F6E\uFF1A</span>
install <span class="token operator">-</span>m644 contrib<span class="token operator">/</span>redhat<span class="token operator">/</span>sshd<span class="token punctuation">.</span>pam     $RPM_BUILD_ROOT<span class="token operator">/</span>etc<span class="token operator">/</span>pam<span class="token punctuation">.</span>d<span class="token operator">/</span>sshd
<span class="token comment"># \u4FEE\u6539\u5982\u4E0B\uFF1A\u539F\u56E0\u662F\u4F7F\u7528\u81EA\u5DF2\u5B9A\u5236\u7684 sshd \u6587\u4EF6</span>
install <span class="token operator">-</span>m644 $RPM_SOURCE_DIR<span class="token operator">/</span>sshd $RPM_BUILD_ROOT<span class="token operator">/</span>etc<span class="token operator">/</span>pam<span class="token punctuation">.</span>d<span class="token operator">/</span>sshd

<span class="token comment"># \u6CE8 \u4EE5\u4E0B\u64CD\u4F5C\u90FD\u662F\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 \u5C06\u547D\u4EE4\u653E\u8FDB\u53BB \u5E76\u975E\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4 \u8FD9\u4E9B\u547D\u4EE4\u5728\u5B89\u88C5ssh\u7684\u65F6\u5019 \u4F1A\u6839\u636Espec\u6587\u4EF6\u8FDB\u884C\u6267\u884C</span>

<span class="token comment"># \u641C\u7D22 %pre server</span>
<span class="token comment"># \u5728 %pre server \u4E0B\u65B0\u589E\u914D\u7F6E \u8868\u793A\u5B89\u88C5\u524D\u6267\u884C\u7684\u64CD\u4F5C</span>
<span class="token comment"># \u914D\u7F6E\u5982\u4E0B\uFF1A\u5907\u4EFD\u5F53\u524Dssh\u6587\u4EF6</span>
cp <span class="token operator">-</span>r <span class="token operator">/</span>etc<span class="token operator">/</span>ssh <span class="token operator">/</span>etc<span class="token operator">/</span>ssh_bak

<span class="token comment"># \u641C\u7D22 %post server</span>
<span class="token comment"># \u5728 %post server \u4E0B\u65B0\u589E\u914D\u7F6E\uFF0C\u8868\u793A\u5B89\u88C5\u540E\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4</span>
    
<span class="token comment"># \u5141\u8BB8root\u767B\u5F55\uFF1B\u5347\u7EA7\u4E3A8.6\u540E\u9ED8\u8BA4\u4E3A\u4E0D\u5141\u8BB8root\u767B\u5F55</span>
sed <span class="token operator">-</span>i <span class="token operator">-</span>e  <span class="token string">&quot;s/#PermitRootLogin prohibit-password/PermitRootLogin yes/g&quot;</span>    <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config
<span class="token comment"># \u5141\u8BB8\u4F7F\u7528PAM\u767B\u5F55\u8BA4\u8BC1</span>
sed <span class="token operator">-</span>i  <span class="token operator">-</span>e  <span class="token string">&quot;s/#UsePAM no/UsePAM yes/g&quot;</span>  <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config
<span class="token comment"># \u5141\u8BB8\u4F7F\u7528X11Forwarding\u56FE\u5F62\u6A21\u5757</span>
sed <span class="token operator">-</span>i <span class="token operator">-</span>e <span class="token string">&quot;s/#X11Forwarding no/X11Forwarding yes/g&quot;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config
<span class="token comment"># \u589E\u52A0\u8BA4\u8BC1\u652F\u6301\uFF08\u9ED8\u8BA4openssh 8.6\uFF0C\u9ED8\u8BA4\u4E0D\u652F\u6301\u90E8\u5206\u4F4E\u7248\u672C\u7684\u8BA4\u8BC1\u6A21\u5F0F\uFF09\uFF0C\u4E0D\u6DFB\u52A0\u4F1A\u9020\u6210\u4F4E\u7248\u672C\u7684\u8FDE\u63A5\u5668\u5982\uFF1ACRT\u7B49\uFF0C\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5931\u8D25</span>
echo <span class="token string">&quot;KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group14-sha1&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config
<span class="token comment"># \u7ED9/etc/init.d/sshd \u6267\u884C\u6743\u9650</span>
chmod <span class="token operator">+</span>x <span class="token operator">/</span>etc<span class="token operator">/</span>init<span class="token punctuation">.</span>d<span class="token operator">/</span>sshd
<span class="token comment"># \u4E09\u4E2A\u6587\u4EF6 ssh_host_rsa_key\u3001ssh_host_ecdsa_key\u3001ssh_host_ed25519_key 8.6\u7248\u672C\u7F29\u5C0F\u4E86\u6743\u9650\uFF0C\u53EA\u5141\u8BB8root\u67E5\u770B\uFF0C\u5426\u8005\u542F\u52A8sshd\u670D\u52A1\u4F1A\u62A5\u9519</span>
chmod <span class="token number">600</span> <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>ssh_host_rsa_key
chmod <span class="token number">600</span> <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>ssh_host_ecdsa_key
chmod <span class="token number">600</span> <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>ssh_host_ed25519_key
</code></pre></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>cd <span class="token operator">/</span>root<span class="token operator">/</span>rpmbuild<span class="token operator">/</span>SPECS<span class="token operator">/</span>
rpmbuild <span class="token operator">-</span>ba openssh<span class="token punctuation">.</span>spec
</code></pre></div><p><strong>\u67E5\u770B\u751F\u6210\u7684 RPM \u53CA\u8FDB\u884C\u6253\u5305</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>cd <span class="token operator">/</span>root<span class="token operator">/</span>rpmbuild<span class="token operator">/</span>RPMS<span class="token operator">/</span>x86_64<span class="token operator">/</span>
ls <span class="token operator">/</span>root<span class="token operator">/</span>rpmbuild<span class="token operator">/</span>RPMS<span class="token operator">/</span>x86_64<span class="token operator">/</span>
openssh<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm          openssh<span class="token operator">-</span>debuginfo<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm
openssh<span class="token operator">-</span>clients<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm  openssh<span class="token operator">-</span>server<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm
<span class="token comment">// \u6253\u5305</span>
tar <span class="token operator">-</span>zcvf openssh<span class="token operator">-</span><span class="token number">8.6</span>p1_rpm_package<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz <span class="token operator">*</span><span class="token punctuation">.</span>rpm
</code></pre></div><h2 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h2><p><strong>\u9A8C\u8BC1 RPM ( scp \u5230\u5176\u4ED6\u670D\u52A1\u5668\u8FDB\u884C\u6D4B\u8BD5)</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>ls <span class="token operator">/</span>root<span class="token operator">/</span>openssh<span class="token operator">-</span><span class="token number">8.6</span>p1_rpm_package<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
tar xf openssh<span class="token operator">-</span><span class="token number">8.6</span>p1_rpm_package<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
</code></pre></div><p>\uFF08\u53EF\u9009\uFF09<strong>\u4FDD\u5B58\u73B0\u6709 SSH \u914D\u7F6E\u53CA\u76F8\u5173\u547D\u4EE4</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u5907\u4EFD</span>
<span class="token function">mkdir</span> /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>
<span class="token function">cp</span> -r /etc/ssh/* /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>
<span class="token function">cp</span> /etc/pam.d/sshd /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>
<span class="token comment"># \u547D\u4EE4\u5907\u4EFD</span>
<span class="token function">mkdir</span> /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>/bin/
<span class="token function">cp</span> /bin/ssh* /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>/bin/
<span class="token function">cp</span> /usr/sbin/sshd /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>/bin/
</code></pre></div><p><strong>\u5B89\u88C5 RPM</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>rpm <span class="token operator">-</span>Uivh openssh<span class="token operator">-</span><span class="token operator">*</span>rpm
</code></pre></div><p><strong>\u67E5\u770B\u5B89\u88C5\u7248\u672C</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>\u67E5\u770B\u7248\u672C
ssh <span class="token operator">-</span>V
OpenSSH_8<span class="token punctuation">.</span><span class="token number">6</span>p1<span class="token punctuation">,</span> OpenSSL <span class="token number">1.0</span><span class="token punctuation">.</span><span class="token number">2</span>k<span class="token operator">-</span>fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
\u67E5\u770B\u5B89\u88C5\u60C5\u51B5
rpm <span class="token operator">-</span>qa <span class="token operator">|</span>grep openssh
openssh<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64
openssh<span class="token operator">-</span>server<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64
openssh<span class="token operator">-</span>askpass<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64
openssh<span class="token operator">-</span>clients<span class="token operator">-</span><span class="token number">8.6</span>p1<span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64
</code></pre></div><p>\uFF08\u53EF\u9009\uFF09<strong>\u6062\u590D\u914D\u7F6E</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>cp <span class="token operator">/</span>root<span class="token operator">/</span>ssh_bak_<span class="token identifier"><span class="token punctuation">\`</span>date +&quot;%Y-%m-%d&quot;<span class="token punctuation">\`</span></span><span class="token operator">/</span>sshd <span class="token operator">/</span>etc<span class="token operator">/</span>pam<span class="token punctuation">.</span>d<span class="token operator">/</span>
cp <span class="token operator">/</span>root<span class="token operator">/</span>ssh_bak_<span class="token identifier"><span class="token punctuation">\`</span>date +&quot;%Y-%m-%d&quot;<span class="token punctuation">\`</span></span><span class="token operator">/</span>sshd_config <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>
cat <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config <span class="token operator">|</span> grep PermitRootLogin
rm <span class="token operator">-</span>rf <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>ssh_host<span class="token operator">*</span><span class="token keyword">key</span>
</code></pre></div><p><strong>\u91CD\u542F sshd \u670D\u52A1</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>systemctl restart sshd
</code></pre></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><p><strong>root\u7528\u6237\u65E0\u6CD5\u767B\u5F55</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>cat <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config <span class="token operator">|</span> grep PermitRootLogin
\u6B63\u5E38: PermitRootLogin yes
\u5176\u4ED6\u5747\u4E3A\u4E0D\u6B63\u5E38 \u9700\u8981\u6539\u4E3A\u6B63\u5E38
</code></pre></div><p><strong>pam\u62A5\u9519 \u9700\u8981\u6062\u590D\u65E7pam\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cp</span> /root/ssh_bak_<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">\`</span></span>/sshd /etc/pam.d/
</code></pre></div><p><strong>\u4EE5\u4E0B\u914D\u7F6E\u5728/etc/ssh/sshd_config\u4E0B\u5FC5\u987B\u5B58\u5728</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>UseDNS <span class="token keyword">no</span>
AddressFamily inet
SyslogFacility AUTHPRIV
PermitRootLogin yes
GSSAPIAuthentication yes
PasswordAuthentication yes
KexAlgorithms curve25519<span class="token operator">-</span>sha256<span class="token variable">@libssh.org</span><span class="token punctuation">,</span>ecdh<span class="token operator">-</span>sha2<span class="token operator">-</span>nistp256<span class="token punctuation">,</span>ecdh<span class="token operator">-</span>sha2<span class="token operator">-</span>nistp384<span class="token punctuation">,</span>ecdh<span class="token operator">-</span>sha2<span class="token operator">-</span>nistp521<span class="token punctuation">,</span>diffie<span class="token operator">-</span>hellman<span class="token operator">-</span>group14<span class="token operator">-</span>sha1
</code></pre></div>`,41);function p(e,t){return o}var c=s(a,[["render",p],["__file","centos7-update-ssh8.6.html.vue"]]);export{c as default};
