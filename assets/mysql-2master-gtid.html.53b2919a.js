import{_ as s,b as n}from"./app.b40cbc81.js";const a={},p=n(`<p>\u64CD\u4F5C\u7CFB\u7EDF\uFF1ACentOS Linux release 7.8.2003 (Core)</p><p>master-1\uFF1A192.168.200.50</p><p>master-2\uFF1A192.168.200.51</p><h2 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h2><p><strong>\u6CE8: \u6240\u6709\u8282\u70B9\u90FD\u9700\u8981\u6267\u884C</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u5173\u95ED\u9632\u706B\u5899
systemctl stop firewalld
// \u5173\u95EDSelinux
<span class="token function">vim</span> /etc/sysconfig/selinux
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled 
// \u4E34\u65F6\u5173\u95EDSelinux
setenforce <span class="token number">0</span>
</code></pre></div><h2 id="\u4E8C\u8FDB\u5236\u5B89\u88C5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5B89\u88C5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u5B89\u88C5\u6570\u636E\u5E93</h2><p><strong>\u6CE8: \u6240\u6709\u8282\u70B9\u90FD\u9700\u8981\u6267\u884C</strong></p><h3 id="\u5B89\u88C5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5B89\u88C5\u6570\u636E\u5E93</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u5B89\u88C5\u6570\u636E\u5E93
<span class="token function">mkdir</span> /usr/local/mysql
// \u89E3\u538B\u7F29
<span class="token function">tar</span> -zxvf mysql-5.7.35-linux-glibc2.12-x86_64.tar.gz -C /usr/local/mysql --strip<span class="token operator">=</span><span class="token number">1</span>
// \u521B\u5EFA\u7528\u6237\u53CA\u7528\u6237\u7EC4
<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> mysql -g mysql -s /sbin/nologin
// \u521B\u5EFA\u6570\u636E\u5E93\u6570\u636E\u76EE\u5F55
<span class="token function">mkdir</span> /usr/local/mysql/data
// \u6388\u6743
<span class="token function">chown</span> -R mysql.mysql /usr/local/mysql
// \u590D\u5236\u542F\u52A8\u811A\u672C
<span class="token function">cp</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
// \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8
<span class="token function">chkconfig</span> on mysqld
</code></pre></div><h3 id="\u521D\u59CB\u5316\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6570\u636E\u5E93</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>
// \u521D\u59CB\u5316\u6570\u636E\u5E93 \u6B64\u5904\u4F1A\u751F\u6210\u9ED8\u8BA4root\u5BC6\u7801
/usr/local/mysql/bin/mysqld --user<span class="token operator">=</span>mysql --basedir<span class="token operator">=</span>/usr/local/mysql/ --datadir<span class="token operator">=</span>/usr/local/mysql/data --initialize
// \u4F1A\u6253\u5370\u4E00\u4E0B\u65E5\u5FD7 \u8BB0\u4F4F\u4FDD\u5B58\u597D\u5BC6\u7801
<span class="token number">2021</span>-09-01T11:54:32.248336Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option <span class="token punctuation">(</span>see documentation <span class="token keyword">for</span> <span class="token function">more</span> details<span class="token punctuation">)</span>.
<span class="token number">2021</span>-09-01T11:54:33.099720Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> InnoDB: New log files created, <span class="token assign-left variable">LSN</span><span class="token operator">=</span><span class="token number">45790</span>
<span class="token number">2021</span>-09-01T11:54:33.236031Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> InnoDB: Creating foreign key constraint system tables.
<span class="token number">2021</span>-09-01T11:54:33.310273Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> No existing UUID has been found, so we assume that this is the first <span class="token function">time</span> that this server has been started. Generating a new UUID: 5f55799d-0b1b-11ec-9475-005056a53fc6.
<span class="token number">2021</span>-09-01T11:54:33.313554Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Gtid table is not ready to be used. Table <span class="token string">&#39;mysql.gtid_executed&#39;</span> cannot be opened.
<span class="token number">2021</span>-09-01T11:54:34.641583Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> A deprecated TLS version TLSv1 is enabled. Please use TLSv1.2 or higher.
<span class="token number">2021</span>-09-01T11:54:34.641629Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> A deprecated TLS version TLSv1.1 is enabled. Please use TLSv1.2 or higher.
<span class="token number">2021</span>-09-01T11:54:34.642431Z <span class="token number">0</span> <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> CA certificate ca.pem is self signed.
<span class="token number">2021</span>-09-01T11:54:34.944690Z <span class="token number">1</span> <span class="token punctuation">[</span>Note<span class="token punctuation">]</span> A temporary password is generated <span class="token keyword">for</span> root@localhost: **urG/hV3t0jo?**
</code></pre></div><h2 id="\u53CC\u4E3B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53CC\u4E3B\u914D\u7F6E" aria-hidden="true">#</a> \u53CC\u4E3B\u914D\u7F6E</h2><h3 id="\u8282\u70B91\u914D\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B91\u914D\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> <strong>\u8282\u70B91\u914D\u7F6E\u6570\u636E\u5E93</strong></h3><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u6253\u5F00/etc/my.cnf \u5C06\u4EE5\u4E0B\u5185\u5BB9\u6DFB\u52A0\u8FDB\u53BB
<span class="token function">vim</span> /etc/my.cnf

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># \u6570\u636E\u76EE\u5F55</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/usr/local/mysql/data
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql/
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/data/mysql.sock
<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql
<span class="token comment"># \u7AEF\u53E3</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">13306</span>
character-set-server<span class="token operator">=</span>utf8
default_storage_engine <span class="token operator">=</span> InnoDB
lower_case_table_names <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u670D\u52A1ID \u552F\u4E00 \u4E0D\u540C\u8282\u70B9\u5206\u914D\u4E0D\u540CID</span>
server_id <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u6253\u5F00Mysql\u65E5\u5FD7 \u683C\u5F0F\u4E3A\u4E8C\u8FDB\u5236</span>
log-bin <span class="token operator">=</span> mysql-bin
<span class="token comment"># \u5F00\u542F\u57FA\u4E8EGTID\u7684\u590D\u5236</span>
gtid_mode <span class="token operator">=</span> on
enforce_gtid_consistency <span class="token operator">=</span> on
binlog_format <span class="token operator">=</span> row
log-slave-updates <span class="token operator">=</span> <span class="token number">1</span>
skip_slave_start <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u4E0E\u8282\u70B9\u6570\u76F8\u540C</span>
auto-increment-increment <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># \u81EA\u589E</span>
auto-increment-offset <span class="token operator">=</span> <span class="token number">1</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
port <span class="token operator">=</span> <span class="token number">13306</span>
default-character-set<span class="token operator">=</span>utf8
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/data/mysql.sock
<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
log-error<span class="token operator">=</span>/usr/local/mysql/data/error.log
pid-file<span class="token operator">=</span>/usr/local/mysql/data/database.pid
</code></pre></div><p><strong>\u8282\u70B91\u542F\u52A8\u6570\u636E\u5E93</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u542F\u52A8\u6570\u636E\u5E93</span>
<span class="token operator">/</span>etc<span class="token operator">/</span>init<span class="token punctuation">.</span>d<span class="token operator">/</span>mysqld start
</code></pre></div><p><strong>\u8282\u70B91\u521D\u59CB\u5316\u5BC6\u7801</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
<span class="token comment">// \u4FEE\u6539root\u5BC6\u7801</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u8282\u70B91\u521B\u5EFA\u4ECE\u5E93\u540C\u6B65\u7528\u6237</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
<span class="token comment">// \u521B\u5EFA\u540C\u6B65\u7528\u6237</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> master1<span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8282\u70B92\u914D\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B92\u914D\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> <strong>\u8282\u70B92\u914D\u7F6E\u6570\u636E\u5E93</strong></h3><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u6253\u5F00/etc/my.cnf \u5C06\u4EE5\u4E0B\u5185\u5BB9\u6DFB\u52A0\u8FDB\u53BB
<span class="token function">vim</span> /etc/my.cnf

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># \u6570\u636E\u76EE\u5F55</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/usr/local/mysql/data
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql/
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/data/mysql.sock
<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql
<span class="token comment"># \u7AEF\u53E3</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">13306</span>
character-set-server<span class="token operator">=</span>utf8
default_storage_engine <span class="token operator">=</span> InnoDB
lower_case_table_names <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u670D\u52A1ID \u552F\u4E00 \u4E0D\u540C\u8282\u70B9\u5206\u914D\u4E0D\u540CID</span>
server_id <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># \u6253\u5F00Mysql\u65E5\u5FD7 \u683C\u5F0F\u4E3A\u4E8C\u8FDB\u5236</span>
log-bin <span class="token operator">=</span> mysql-bin
<span class="token comment"># \u5F00\u542F\u57FA\u4E8EGTID\u7684\u590D\u5236</span>
gtid_mode <span class="token operator">=</span> on
enforce_gtid_consistency <span class="token operator">=</span> on
binlog_format <span class="token operator">=</span> row
log-slave-updates <span class="token operator">=</span> <span class="token number">1</span>
skip_slave_start <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u4E0E\u8282\u70B9\u6570\u76F8\u540C</span>
auto-increment-increment <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># \u81EA\u589E</span>
auto-increment-offset <span class="token operator">=</span> <span class="token number">2</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
port <span class="token operator">=</span> <span class="token number">13306</span>
default-character-set<span class="token operator">=</span>utf8
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/data/mysql.sock
<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
log-error<span class="token operator">=</span>/usr/local/mysql/data/error.log
pid-file<span class="token operator">=</span>/usr/local/mysql/data/database.pid
</code></pre></div><p><strong>\u8282\u70B92\u542F\u52A8\u6570\u636E\u5E93</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u542F\u52A8\u6570\u636E\u5E93
/etc/init.d/mysqld start
</code></pre></div><p><strong>\u8282\u70B92\u521D\u59CB\u5316\u5BC6\u7801</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
<span class="token comment">// \u4FEE\u6539root\u5BC6\u7801</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u8282\u70B92\u521B\u5EFA\u4ECE\u5E93\u540C\u6B65\u7528\u6237</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
<span class="token comment">// \u521B\u5EFA\u540C\u6B65\u7528\u6237</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> master2<span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53CC\u4E3B\u540C\u6B65\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53CC\u4E3B\u540C\u6B65\u914D\u7F6E" aria-hidden="true">#</a> \u53CC\u4E3B\u540C\u6B65\u914D\u7F6E</h2><p><strong>\u8282\u70B92\u5F00\u542F\u540C\u6B65\u8282\u70B91</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
<span class="token comment">// \u521B\u5EFA\u540C\u6B65</span>
mysql<span class="token operator">&gt;</span>change master <span class="token keyword">to</span> master_host<span class="token operator">=</span><span class="token string">&#39;192.168.200.50&#39;</span><span class="token punctuation">,</span>master_user<span class="token operator">=</span><span class="token string">&#39;master1&#39;</span><span class="token punctuation">,</span>master_password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>master_port<span class="token operator">=</span><span class="token number">13306</span><span class="token punctuation">,</span>master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u540C\u6B65</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">start</span> slave<span class="token punctuation">;</span>
<span class="token comment">// \u67E5\u770B\u540C\u6B65\u72B6\u6001</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G<span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
               Slave_IO_State: Waiting <span class="token keyword">for</span> master <span class="token keyword">to</span> send event
                  Master_Host: <span class="token number">192.168</span><span class="token number">.200</span><span class="token number">.50</span>
                  Master_User: master1
                  Master_Port: <span class="token number">13306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000003</span>
          Read_Master_Log_Pos: <span class="token number">194</span>
               Relay_Log_File: <span class="token keyword">work</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span>relay<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000003</span>
                Relay_Log_Pos: <span class="token number">367</span>
        Relay_Master_Log_File: mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000003</span>
             Slave_IO_Running: Yes <span class="token comment">// \u5FC5\u987B\u4E3AYes \u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u4F1A\u8FDE\u63A5Master\u8282\u70B9\u7684Bin-Log \u5E76\u540C\u6B65\u5230\u672C\u5730\u4E2D\u7EE7\u65E5\u5FD7\u4E2D</span>
            Slave_SQL_Running: Yes <span class="token comment">// \u5FC5\u987B\u4E3AYes \u8868\u793A\u4ECE\u672C\u5730\u4E2D\u7EE7\u65E5\u5FD7\u4E2D\u8BFB\u53D6\u6570\u636E \u6062\u590D\u5230\u5BF9\u5E94\u4F4D\u7F6E</span>
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: <span class="token number">0</span>
                   Last_Error:
                 Skip_Counter: <span class="token number">0</span>
          Exec_Master_Log_Pos: <span class="token number">194</span>
              Relay_Log_Space: <span class="token number">670</span>
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: <span class="token number">0</span>
           Master_SSL_Allowed: <span class="token keyword">No</span>
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: <span class="token number">0</span>
Master_SSL_Verify_Server_Cert: <span class="token keyword">No</span>
                Last_IO_Errno: <span class="token number">0</span>
                Last_IO_Error:
               Last_SQL_Errno: <span class="token number">0</span>
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: <span class="token number">1</span>
                  Master_UUID: <span class="token number">9</span>e07b87e<span class="token operator">-</span><span class="token number">0</span>b1e<span class="token operator">-</span><span class="token number">11</span>ec<span class="token operator">-</span><span class="token number">8609</span><span class="token operator">-</span><span class="token number">005056</span>a53fc6
             Master_Info_File: <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span><span class="token keyword">data</span><span class="token operator">/</span>master<span class="token punctuation">.</span>info
                    SQL_Delay: <span class="token number">0</span>
          SQL_Remaining_Delay: <span class="token boolean">NULL</span>
      Slave_SQL_Running_State: Slave has <span class="token keyword">read</span> <span class="token keyword">all</span> relay log<span class="token punctuation">;</span> waiting <span class="token keyword">for</span> more updates
           Master_Retry_Count: <span class="token number">86400</span>
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: <span class="token number">1</span>
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u8282\u70B91\u5F00\u542F\u540C\u6B65\u8282\u70B92</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">13306</span>
<span class="token comment">// \u521B\u5EFA\u540C\u6B65</span>
mysql<span class="token operator">&gt;</span>change master to master_host<span class="token operator">=</span>&#39;<span class="token number">192.168</span><span class="token number">.200</span><span class="token number">.51</span>&#39;<span class="token punctuation">,</span>master_user<span class="token operator">=</span><span class="token char">&#39;master2&#39;</span><span class="token punctuation">,</span>master_password<span class="token operator">=</span><span class="token char">&#39;123456&#39;</span><span class="token punctuation">,</span>master_port<span class="token operator">=</span><span class="token number">13306</span><span class="token punctuation">,</span>master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u540C\u6B65</span>
mysql<span class="token operator">&gt;</span>start slave<span class="token punctuation">;</span>
<span class="token comment">// \u67E5\u770B\u540C\u6B65\u72B6\u6001</span>
mysql<span class="token operator">&gt;</span>show slave status\\G<span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> row <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
               Slave_IO_State<span class="token punctuation">:</span> Waiting <span class="token keyword">for</span> master to send event
                  Master_Host<span class="token punctuation">:</span> <span class="token number">192.168</span><span class="token number">.200</span><span class="token number">.51</span>
                  Master_User<span class="token punctuation">:</span> master2
                  Master_Port<span class="token punctuation">:</span> <span class="token number">13306</span>
                Connect_Retry<span class="token punctuation">:</span> <span class="token number">60</span>
              Master_Log_File<span class="token punctuation">:</span> mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span>
          Read_Master_Log_Pos<span class="token punctuation">:</span> <span class="token number">759</span>
               Relay_Log_File<span class="token punctuation">:</span> work<span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>relay<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000002</span>
                Relay_Log_Pos<span class="token punctuation">:</span> <span class="token number">862</span>
        Relay_Master_Log_File<span class="token punctuation">:</span> mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span>
             Slave_IO_Running<span class="token punctuation">:</span> Yes
            Slave_SQL_Running<span class="token punctuation">:</span> Yes
              Replicate_Do_DB<span class="token punctuation">:</span>
          Replicate_Ignore_DB<span class="token punctuation">:</span>
           Replicate_Do_Table<span class="token punctuation">:</span>
       Replicate_Ignore_Table<span class="token punctuation">:</span>
      Replicate_Wild_Do_Table<span class="token punctuation">:</span>
  Replicate_Wild_Ignore_Table<span class="token punctuation">:</span>
                   Last_Errno<span class="token punctuation">:</span> <span class="token number">0</span>
                   Last_Error<span class="token punctuation">:</span>
                 Skip_Counter<span class="token punctuation">:</span> <span class="token number">0</span>
          Exec_Master_Log_Pos<span class="token punctuation">:</span> <span class="token number">759</span>
              Relay_Log_Space<span class="token punctuation">:</span> <span class="token number">1071</span>
              Until_Condition<span class="token punctuation">:</span> None
               Until_Log_File<span class="token punctuation">:</span>
                Until_Log_Pos<span class="token punctuation">:</span> <span class="token number">0</span>
           Master_SSL_Allowed<span class="token punctuation">:</span> No
           Master_SSL_CA_File<span class="token punctuation">:</span>
           Master_SSL_CA_Path<span class="token punctuation">:</span>
              Master_SSL_Cert<span class="token punctuation">:</span>
            Master_SSL_Cipher<span class="token punctuation">:</span>
               Master_SSL_Key<span class="token punctuation">:</span>
        Seconds_Behind_Master<span class="token punctuation">:</span> <span class="token number">0</span>
Master_SSL_Verify_Server_Cert<span class="token punctuation">:</span> No
                Last_IO_Errno<span class="token punctuation">:</span> <span class="token number">0</span>
                Last_IO_Error<span class="token punctuation">:</span>
               Last_SQL_Errno<span class="token punctuation">:</span> <span class="token number">0</span>
               Last_SQL_Error<span class="token punctuation">:</span>
  Replicate_Ignore_Server_Ids<span class="token punctuation">:</span>
             Master_Server_Id<span class="token punctuation">:</span> <span class="token number">2</span>
                  Master_UUID<span class="token punctuation">:</span> e9ff5da2<span class="token operator">-</span>0b1e<span class="token operator">-</span>11ec<span class="token operator">-</span>b665<span class="token operator">-</span>005056a5c44c
             Master_Info_File<span class="token punctuation">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>mysql<span class="token operator">/</span>data<span class="token operator">/</span>master<span class="token punctuation">.</span>info
                    SQL_Delay<span class="token punctuation">:</span> <span class="token number">0</span>
          SQL_Remaining_Delay<span class="token punctuation">:</span> NULL
      Slave_SQL_Running_State<span class="token punctuation">:</span> Slave has read all relay log<span class="token punctuation">;</span> waiting <span class="token keyword">for</span> more updates
           Master_Retry_Count<span class="token punctuation">:</span> <span class="token number">86400</span>
                  Master_Bind<span class="token punctuation">:</span>
      Last_IO_Error_Timestamp<span class="token punctuation">:</span>
     Last_SQL_Error_Timestamp<span class="token punctuation">:</span>
               Master_SSL_Crl<span class="token punctuation">:</span>
           Master_SSL_Crlpath<span class="token punctuation">:</span>
           Retrieved_Gtid_Set<span class="token punctuation">:</span> e9ff5da2<span class="token operator">-</span>0b1e<span class="token operator">-</span>11ec<span class="token operator">-</span>b665<span class="token operator">-</span>005056a5c44c<span class="token punctuation">:</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span>
            Executed_Gtid_Set<span class="token punctuation">:</span> 9e07b87e<span class="token operator">-</span>0b1e<span class="token operator">-</span>11ec<span class="token operator">-</span><span class="token number">8609</span><span class="token operator">-</span>005056a53fc6<span class="token punctuation">:</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span>
e9ff5da2<span class="token operator">-</span>0b1e<span class="token operator">-</span>11ec<span class="token operator">-</span>b665<span class="token operator">-</span>005056a5c44c<span class="token punctuation">:</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span>
                Auto_Position<span class="token punctuation">:</span> <span class="token number">1</span>
         Replicate_Rewrite_DB<span class="token punctuation">:</span>
                 Channel_Name<span class="token punctuation">:</span>
           Master_TLS_Version<span class="token punctuation">:</span>
<span class="token number">1</span> row in set <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u5BF9IP\u8FDB\u884C\u6388\u6743\u8BBF\u95EE</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u5728\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u4E0A\u6267\u884C</span>
<span class="token comment">// \u767B\u9646\u6570\u636E\u5E93</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token comment">--port=13306</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;192.168.200.50&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123456&#39;</span> <span class="token keyword">with</span> <span class="token keyword">grant</span> <span class="token keyword">option</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;192.168.200.51&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123456&#39;</span> <span class="token keyword">with</span> <span class="token keyword">grant</span> <span class="token keyword">option</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span><span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6D4B\u8BD5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6D4B\u8BD5\u6570\u636E\u5E93</h2><p><strong>\u6CE8\uFF1A\u4EFB\u610F\u4E00\u53F0\u670D\u52A1\u5668/2\u4E2A\u8282\u70B9\u5176\u4E2D\u4E00\u4E2A \u9700\u8981\u786E\u4FDD\u5DF2\u7ECF\u6388\u6743</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u767B\u9646\u6570\u636E\u5E93 \u5982\u679C\u767B\u9646\u6210\u529F \u4EE3\u8868\u6570\u636E\u5E93\u96C6\u7FA4\u6B63\u5E38\u8FD0\u884C</span>
<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">-</span>h <span class="token number">192.168</span><span class="token number">.200</span><span class="token number">.50</span> <span class="token comment">--port=13306</span>
</code></pre></div><p><strong>\u5B8C\u6574\u6570\u636E\u5E93\u6D4B\u8BD5</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u5E93\u521B\u5EFA</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> test1<span class="token punctuation">;</span>
<span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u8868\u521B\u5EFA</span>
<span class="token keyword">use</span> test1<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">user</span><span class="token punctuation">(</span>
id <span class="token keyword">int</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
<span class="token keyword">user</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
birthday <span class="token keyword">datetime</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u63D2\u5165 \u4E0D\u5E26ID \u8BA9Mysql\u81EA\u589E</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span><span class="token punctuation">(</span><span class="token keyword">user</span><span class="token punctuation">,</span>sex<span class="token punctuation">,</span>birthday<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;\u8000\u8000&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1977-09-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u67E5\u770B\u6570\u636E</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+--------+-----+---------------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> <span class="token keyword">user</span>   <span class="token operator">|</span> sex <span class="token operator">|</span> birthday            <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+--------+-----+---------------------+</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> \u5F20\u4E09 <span class="token operator">|</span> \u7537 <span class="token operator">|</span> <span class="token number">1977</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">4</span> <span class="token operator">|</span> \u5F20\u4E09 <span class="token operator">|</span> \u7537 <span class="token operator">|</span> <span class="token number">1977</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">6</span> <span class="token operator">|</span> \u5F20\u4E09 <span class="token operator">|</span> \u7537 <span class="token operator">|</span> <span class="token number">1977</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+--------+-----+---------------------+</span>
\u53D1\u73B0\u662F<span class="token number">2</span>\u500D\u6570\u9012\u589E
<span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u63D2\u5165 \u643A\u5E26ID</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token keyword">user</span><span class="token punctuation">,</span>sex<span class="token punctuation">,</span>birthday<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;\u8000\u8000&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1977-09-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><ol><li><a href="https://keithlan.github.io/2016/06/23/gtid/" target="_blank" rel="noopener noreferrer">https://keithlan.github.io/2016/06/23/gtid/</a></li><li><a href="http://mysql.taobao.org/monthly/2020/05/09/" target="_blank" rel="noopener noreferrer">http://mysql.taobao.org/monthly/2020/05/09/</a></li><li><a href="https://bbs.huaweicloud.com/blogs/211180" target="_blank" rel="noopener noreferrer">https://bbs.huaweicloud.com/blogs/211180</a></li></ol>`,43);function o(e,t){return p}var l=s(a,[["render",o],["__file","mysql-2master-gtid.html.vue"]]);export{l as default};
