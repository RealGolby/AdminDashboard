import {Typography} from "@mui/material";


const ServerConsoleMock = "\n" +
    "\n" +
    "    0[||||||||||||                                                                                             10.1%]   6[||||||                                                                                                     4.5%]\n" +
    "    1[||||||                                                                                                    5.2%]   7[||||||||                                                                                                   6.4%]\n" +
    "    2[||||                                                                                                      2.6%]   8[|||||                                                                                                      3.9%]\n" +
    "    3[|||||||||                                                                                                 7.1%]   9[|||||||                                                                                                    5.8%]\n" +
    "    4[||||                                                                                                      2.6%]  10[|||||||                                                                                                    5.2%]\n" +
    "    5[|||||||                                                                                                   5.8%]  11[|||||                                                                                                      3.9%]\n" +
    "  Mem[|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||11.0G/14.8G] Tasks: 121, 1137 thr, 226 kthr; 1 running\n" +
    "  Swp[                                                                                                         0K/0K] Load average: 0.20 0.65 0.84 \n" +
    "                                                                                                                      Uptime: 11:22:57\n" +
    "\n" +
    "  [Main] [I/O]\n" +
    "    PID USER       PRI  NI  VIRT   RES   SHR S  CPU%▽MEM%   TIME+  Command\n" +
    " 325032 vasabi      20   0 3192M  530M  132M S  14.8  3.5  3:46.33 /usr/lib/firefox/firefox -contentproc -childID 238 -isForBrowser -prefsLen 32618 -prefMapSize 227218 -jsInitLen 246772 -parentBuildID 20230105173156 -appDir /usr/lib/fir\n" +
    "   5162 vasabi      20   0 4326M  984M  310M S  10.3  6.5  1h14:21 /usr/lib/firefox/firefox\n" +
    "   5489 vasabi      20   0  693M  134M  117M S   4.5  0.9 15:34.03 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    "   5208 vasabi      20   0 4326M  984M  310M S   3.9  6.5 19:56.45 /usr/lib/firefox/firefox\n" +
    "    817 root        20   0 25.4G  152M 40736 S   1.9  1.0 12:05.88 /usr/lib/Xorg :0 -seat seat0 -auth /run/lightdm/root/:0 -nolisten tcp vt7 -novtswitch\n" +
    "   5386 vasabi      20   0 3111M  399M 74480 S   1.9  2.6 18:55.11 /usr/lib/firefox/firefox -contentproc -childID 3 -isForBrowser -prefsLen 31731 -prefMapSize 227218 -jsInitLen 246772 -parentBuildID 20230105173156 -appDir /usr/lib/firef\n" +
    " 273142 vasabi      20   0  481M 48724 27628 S   1.9  0.3  0:05.46 xfce4-terminal\n" +
    " 324464 vasabi      20   0 4326M  984M  310M S   1.9  6.5  2:16.80 /usr/lib/firefox/firefox\n" +
    " 441626 vasabi      20   0  693M  134M  117M S   1.3  0.9  0:03.16 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    " 441627 vasabi      20   0  693M  134M  117M S   1.3  0.9  0:03.12 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    " 444963 vasabi      20   0 14812  8688  3616 R   1.3  0.1  0:00.15 htop -M\n" +
    "    972 vasabi       9 -11  112M 68024  6468 S   0.6  0.4  0:40.96 /usr/bin/pipewire\n" +
    "   5186 vasabi      20   0 4326M  984M  310M S   0.6  6.5  1:41.70 /usr/lib/firefox/firefox\n" +
    "   5190 vasabi      20   0 4326M  984M  310M S   0.6  6.5  1:41.20 /usr/lib/firefox/firefox\n" +
    "   5196 vasabi      20   0 4326M  984M  310M S   0.6  6.5  3:14.90 /usr/lib/firefox/firefox\n" +
    "   5221 vasabi      20   0 4326M  984M  310M S   0.6  6.5  2:47.59 /usr/lib/firefox/firefox\n" +
    "   5259 vasabi      20   0 4326M  984M  310M S   0.6  6.5  4:32.75 /usr/lib/firefox/firefox\n" +
    "   5406 vasabi      20   0 3111M  399M 74480 S   0.6  2.6  0:32.52 /usr/lib/firefox/firefox -contentproc -childID 3 -isForBrowser -prefsLen 31731 -prefMapSize 227218 -jsInitLen 246772 -parentBuildID 20230105173156 -appDir /usr/lib/firef\n" +
    "   5490 vasabi      20   0  472M 31552 17224 S   0.6  0.2  1:45.82 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -sandboxingKind 0 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {263712f3-0225\n" +
    " 273394 vasabi      20   0 3025M  423M  135M S   0.6  2.8  0:21.54 /usr/bin/../lib/notepadqq/notepadqq-bin\n" +
    " 325036 vasabi      20   0 3192M  530M  132M S   0.6  3.5  0:06.31 /usr/lib/firefox/firefox -contentproc -childID 238 -isForBrowser -prefsLen 32618 -prefMapSize 227218 -jsInitLen 246772 -parentBuildID 20230105173156 -appDir /usr/lib/fir\n" +
    " 437350 vasabi      20   0 3192M  530M  132M S   0.6  3.5  0:02.20 /usr/lib/firefox/firefox -contentproc -childID 238 -isForBrowser -prefsLen 32618 -prefMapSize 227218 -jsInitLen 246772 -parentBuildID 20230105173156 -appDir /usr/lib/fir\n" +
    " 437377 vasabi      20   0  472M 31552 17224 S   0.6  0.2  0:00.40 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -sandboxingKind 0 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {263712f3-0225\n" +
    " 437982 vasabi      20   0  693M  134M  117M S   0.6  0.9  0:00.38 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    " 441179 vasabi      20   0 11.8G 3512M 44428 S   0.6 23.3  0:00.23 /usr/bin/java -classpath /opt/webstorm/lib/util.jar:/opt/webstorm/lib/app.jar:/opt/webstorm/lib/3rd-party-rt.jar:/opt/webstorm/lib/platform-statistics-devkit.jar:/opt/we\n" +
    " 441624 vasabi      20   0  693M  134M  117M S   0.6  0.9  0:03.06 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    " 441625 vasabi      20   0  693M  134M  117M S   0.6  0.9  0:03.17 /usr/lib/firefox/firefox -contentproc -parentBuildID 20230105173156 -prefsLen 31731 -prefMapSize 227218 -appDir /usr/lib/firefox/browser {818554f5-6453-407e-84d4-842d701\n" +
    "      1 root        20   0  164M  8624  5304 S   0.0  0.1  0:00.64 /usr/lib/systemd/systemd --switched-root --system --deserialize 32\n" +
    "    547 root        20   0 50184 14700 11256 S   0.0  0.1  0:00.22 /usr/lib/systemd/systemd-journald\n" +
    "    561 root        20   0 34584  6596  3604 S   0.0  0.0  0:00.08 /usr/lib/systemd/systemd-udevd\n" +
    "    713 systemd-ti  20   0 91088  2716  1600 S   0.0  0.0  0:00.07 /usr/lib/systemd/systemd-timesyncd\n" +
    "    731 systemd-ti  20   0 91088  2716  1600 S   0.0  0.0  0:00.00 /usr/lib/systemd/systemd-timesyncd\n" +
    "    733 avahi       20   0  8480  1720  1296 S   0.0  0.0  0:01.01 avahi-daemon: running [VASABI-endeavour.local]\n" +
    "    734 dbus        20   0  9756  3568  1792 S   0.0  0.0  0:02.42 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only\n" +
    "    735 root        20   0  232M  5380  2492 S   0.0  0.0  0:00.61 /usr/lib/power-profiles-daemon\n" +
    "    736 root        20   0 50352  2496  1080 S   0.0  0.0  0:00.04 /usr/lib/systemd/systemd-logind\n" +
    "    737 root        20   0 16988  3728  2652 S   0.0  0.0  0:00.04 /usr/lib/systemd/systemd-machined\n" +
    "    738 root        20   0  232M  5380  2492 S   0.0  0.0  0:00.00 /usr/lib/power-profiles-daemon\n" +
    "    739 root        20   0  232M  5380  2492 S   0.0  0.0  0:00.49 /usr/lib/power-profiles-daemon\n" +
    "    751 root        20   0  328M 12944  5684 S   0.0  0.1  0:00.59 /usr/bin/NetworkManager --no-daemon\n" +
    "    752 avahi       20   0  8480   424     0 S   0.0  0.0  0:00.00 avahi-daemon: chroot helper\n" +
    "    753 polkitd     20   0  303M  5924  2548 S   0.0  0.0  0:00.69 /usr/lib/polkit-1/polkitd --no-debug\n" +
    "    754 polkitd     20   0  303M  5924  2548 S   0.0  0.0  0:00.00 /usr/lib/polkit-1/polkitd --no-debug\n" +
    "    755 polkitd     20   0  303M  5924  2548 S   0.0  0.0  0:00.47 /usr/lib/polkit-1/polkitd --no-debug\n" +
    "F1Help  F2Setup F3SearchF4FilterF5Tree  F6SortByF7Nice -F8Nice +F9Kill  F10Quit  \n" +
    "\n"

export default function ServerConsole() {
    return <Typography>{ServerConsoleMock}</Typography>
}