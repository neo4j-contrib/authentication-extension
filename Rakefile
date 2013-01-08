require 'rubygems'
require 'bundler'

version_minor = ENV['BUILD_NUMBER'] || 0
version = "1.0-#{version_minor}"

DEB_NAME='authentication-extension-1.8.1'
DEB_NAME_VERSION="#{DEB_NAME}_#{version}_amd64"

task :clean do
#  rm_rf 'target'
end

task :build do
#  sh 'mvn package'
end

task :package do
  rm_rf %W(target/deb target/#{DEB_NAME}.deb target/#{DEB_NAME_VERSION}.deb)
  mkdir_p 'target/deb/usr/share/neo4j-1.8.1/plugins'

  sh 'cd target/deb/usr/share/neo4j-1.8.1/plugins && unzip ../../../../../authentication-extension-1.8.1-1.0-SNAPSHOT-server-plugin.zip'
  sh 'find target/deb -name .DS_Store -delete'
  deps = %w( neo4j-cloud-1.8.1 )
  sh "fpm -v #{version} -s dir -t deb -n #{DEB_NAME} -m admins@neotechnology.com #{deps.collect { |d| " -d #{d}" }} --deb-user 0 --deb-group 0 "+
         "-p target/#{DEB_NAME_VERSION}.deb --post-install package/post-install.sh --pre-uninstall package/pre-uninstall.sh -C target/deb ."
  sh "cp target/#{DEB_NAME_VERSION}.deb target/#{DEB_NAME}.deb"
end

task :deploy => [:clean, :build, :package] do
  sh "scp -oStrictHostKeyChecking=no target/#{DEB_NAME_VERSION}.deb repo@debian.neo4j.org:/tmp"
  sh "ssh -oStrictHostKeyChecking=no repo@debian.neo4j.org './take-deb private /tmp/#{DEB_NAME_VERSION}.deb'"
  sh "ssh -oStrictHostKeyChecking=no repo@debian.neo4j.org 'rm -f /tmp/#{DEB_NAME_VERSION}.deb'"
end
