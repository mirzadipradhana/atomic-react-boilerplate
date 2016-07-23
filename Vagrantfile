Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "www-dev"
  config.vm.synced_folder "./", "/vagrant", disabled: true
  config.vm.synced_folder "./", "/www"

  config.vm.provision "shell", path: "VagrantProvision.sh"
  config.vm.network "forwarded_port", guest: 8000, host: 8000
end
