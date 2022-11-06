"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"skill-ignition/generics/linux/openwrt",id:"skill-ignition/generics/linux/openwrt",title:"openwrt",description:"Install",source:"@site/docs/0-skill-ignition/0-generics/1-linux/openwrt.mdx",sourceDirName:"0-skill-ignition/0-generics/1-linux",slug:"/skill-ignition/generics/linux/openwrt",permalink:"/skill-ignition/generics/linux/openwrt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"archinstall",permalink:"/skill-ignition/generics/linux/archinstall"},next:{title:"Cloud",permalink:"/category/cloud"}},l={},p=[{value:"Install",id:"install",level:2},{value:"Download from",id:"download-from",level:3},{value:"Download and extract",id:"download-and-extract",level:4},{value:"Burn",id:"burn",level:4},{value:"Temp wifi setup",id:"temp-wifi-setup",level:3},{value:"Get config files",id:"get-config-files",level:3},{value:"Customize",id:"customize",level:3},{value:"Install Wireguard Packages",id:"install-wireguard-packages",level:3},{value:"VPN",id:"vpn",level:2},{value:"Comparations",id:"comparations",level:3}],c={toc:p};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"download-from"},"Download from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://firmware-selector.openwrt.org/"},"https://firmware-selector.openwrt.org/"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi"},"https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi")),(0,o.kt)("h4",{id:"download-and-extract"},"Download and extract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -Lo /tmp/openwrt.img.gz \\\nhttps://downloads.openwrt.org/releases/22.03.2/targets/bcm27xx/bcm2711/openwrt-22.03.2-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz\n\ngunzip /tmp/openwrt.img.gz\n\n")),(0,o.kt)("h4",{id:"burn"},"Burn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dd if=/tmp/openwrt.img of=/dev/sdX bs=2M conv=fsync\nsync\nsudo gparted\n")),(0,o.kt)("h3",{id:"temp-wifi-setup"},"Temp wifi setup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"go to your 192.168.1.1 and setup a wireless acces")),(0,o.kt)("h3",{id:"get-config-files"},"Get config files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/usen-io/openwrt-rpi.git\n\nssh root@192.168.1.1 opkg update\nssh root@192.168.1.1 opkg install git git-http\n\nssh root@192.168.1.1 'git clone https://github.com/usen-io/openwrt-rpi.git /root/openwrt-rpi'\n\n# ignition\nssh root@192.168.1.1 /root/openwrt-rpi/ignition.sh\n\n# place keys\nssh-keygen -y -f ~/.ssh/<key> | ssh root@192.168.1.1 tee /etc/dropbear/authorized_keys\n\n# place config files\nscp etc-config/* root@192.168.1.1:/etc/config\n\nssh root@192.168.1.1 '/root/openwrt-rpi/customize.sh aa 2486ya5pXpK5CtHwe5FZSIW0ybibZbSEY 5LaLvSiiRFzj7uBmGX1yIxEFVKMiCtsU8 openwrt-rpi'\n\nnmcli con down ''\nnmcli con up ''\n\nssh root@10.10.10.1\n\n")),(0,o.kt)("h3",{id:"customize"},"Customize"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'\n#!/bin/sh\n\n# -------- USAGE \n# -------- ./customize.sh <username> <userpass> <rootpass> <hostname>\n\nUSERNAME=$1\nUSERPASS=$2\nROOTPASS=$3\nHOSTNAME=$4\n\n# change root password\n\nprintf "${ROOTPASS}\\n${ROOTPASS}\\n" | passwd root\n\n# -------- create a regular user\n\nuseradd -s /bin/ash -N -m ${USERNAME}\n\nprintf "${USERPASS}\\n${USERPASS}\\n" | passwd ${USERNAME}\n\necho \'%users ALL=(ALL) NOPASSWD: ALL\' |EDITOR=/usr/bin/tee visudo\n\nmkdir /home/$USERNAME/.ssh && cd /home/$USERNAME/.ssh\n\ncp /etc/dropbear/authorized_keys . && chown ${USERNAME}: *\n\n# -------- disable ssh root login\n\nuci set dropbear.@dropbear[0].PasswordAuth="off"\nuci set dropbear.@dropbear[0].RootPasswordAuth="off"\nuci set dropbear.@dropbear[0].RootLogin="on"\nuci commit dropbear\nservice dropbear restart\n\n# -------- set the system hostname\n\nuci set system.@system[0].hostname=${HOSTNAME}\nuci commit\n\n# -------- reboot\nreboot\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#  Packages\n\n# confirm internet access\nping -c 3 google.com\n\n#update piackage list\nopkg update\n\n# install essentials\nopkg install luci-ssl openssh-sftp-server htop vim-full tree diffutils usbutils fdisk sudo shadow-useradd block-mount\n\n# install wireguard packages\nopkg install luci-app-wireguard luci-proto-wireguard\n\n# install external interface drivers\nopkg install kmod-mt76x2u\n\n\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"ref: ",(0,o.kt)("a",{parentName:"p",href:"https://www.itix.fr/blog/install-openwrt-raspberry-pi/"},"https://www.itix.fr/blog/install-openwrt-raspberry-pi/"),"\nref: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikenizo808/How-To-Install-openwrt-on-Raspberry-Pi"},"https://github.com/mikenizo808/How-To-Install-openwrt-on-Raspberry-Pi")),(0,o.kt)("h3",{id:"install-wireguard-packages"},"Install Wireguard Packages"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Navigate to\xa0",(0,o.kt)("strong",{parentName:"p"},"LuCI \u2192 System \u2192 Software"),"\xa0and install the packages\xa0",(0,o.kt)("a",{parentName:"p",href:"https://openwrt.org/packages/pkgdata/luci-proto-wireguard",title:"packages:pkgdata:luci-proto-wireguard"},"luci-proto-wireguard"),"\xa0and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://openwrt.org/packages/pkgdata/luci-app-wireguard",title:"packages:pkgdata:luci-app-wireguard"},"luci-app-wireguard"),"\xa0to manage WireGuard using LuCI.")),(0,o.kt)("h2",{id:"vpn"},"VPN"),(0,o.kt)("h3",{id:"comparations"},"Comparations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BusyBox v1.33.2 (2022-04-16 12:59:34 UTC) built-in shell (ash)\n\n  _______                     ________        __\n |       |.-----.-----.-----.|  |  |  |.----.|  |_\n |   -   ||  _  |  -__|     ||  |  |  ||   _||   _|\n |_______||   __|_____|__|__||________||__|  |____|\n          |__| W I R E L E S S   F R E E D O M\n -----------------------------------------------------\n OpenWrt 21.02.3, r16554-1d4dea6d4f\n -----------------------------------------------------\n\nWifi - WAN\n  4: wlan1    inet 192.168.43.242/24\n  4: wlan1    inet6 fe80::e65f:1ff:fe96:7e9a/64\n\nAlfa - LAN\n  5: br-lan    inet 10.1.2.1/24 brd 10.1.2.255\n  5: br-lan    inet6 fd22:1291:e36e::1/60\n  5: br-lan    inet6 fe80::e65f:1ff:fe96:7e99/64\n\nEthernet - WAN\n  6: wlan0    inet6 fe80::2c0:caff:feb0:62a8/64\n\nVPN - Openvpn\n  7: tun0    inet 10.0.33.3/29\n  7: tun0    inet6 fe80::50a1:2352:b4b4:149a/64\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OpenVPN")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(5645).Z,width:"856",height:"805"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Wireguard")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(1202).Z,width:"856",height:"876"})))}u.isMDXComponent=!0},5645:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Screen Shot 2022-11-02 at 1.45.20 PM-ab078d36abb11e772c5f466efbed34f5.png"},1202:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Screen Shot 2022-11-02 at 6.31.35 PM-ca52028e57a76ccf8c4cf347dc3228a8.png"}}]);