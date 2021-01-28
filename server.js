[
    {
        "Id": "01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b",
        "Created": "2021-01-28T11:45:06.0800879Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "npm",
            "run",
            "dev"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 13995,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-01-28T11:45:11.4416762Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:84038a1d0026adef038fc196596cb9d795ba467bde02a053dc3c01eb996fe538",
        "ResolvConfPath": "/var/lib/docker/containers/01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b/hostname",
        "HostsPath": "/var/lib/docker/containers/01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b/hosts",
        "LogPath": "/var/lib/docker/containers/01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b/01ca2b178529b7adb5ce853d4ade4c3c93a88a402163dd2f4319ebbf9a85dd9b-json.log",
        "Name": "/complex_api_1",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/Users/jthamm/udemi/docker/complex/server:/app:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "complex_default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": null,
            "DnsOptions": null,
            "DnsSearch": null,
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/eb2d1398df0e4691939304e58ddd056debfb456cb2b94eb378492c05c6f0e1cd-init/diff:/var/lib/docker/overlay2/803b84da2135eadc6ea3fbe7fa5f350d0436549a2454407aa710431e1e4e7789/diff:/var/lib/docker/overlay2/84a0862f935e92fce194d740d0905c92d3566f71574db244c040a91d64e8889f/diff:/var/lib/docker/overlay2/b205d15ff84efff6a37b32d8279e5af4c64c5077cca3f31ca648d7bf796b35c4/diff:/var/lib/docker/overlay2/ac06fa80df74149241efe0ff369db9ab996ea2c262f7e67f601ac0929833e5d9/diff:/var/lib/docker/overlay2/05d6c8a30d47912e6f2a46acf7b5fc12c7cb5164208c151c0118b7e54aa0172b/diff:/var/lib/docker/overlay2/4b8c513c1e60a6b414eebf6a81950010e7e1e1366915a48dd2e00939cdf4d021/diff:/var/lib/docker/overlay2/c7ab2cc39e12104c475b66599ec0b7f8573f623097110072cb01c0c80abdfc68/diff:/var/lib/docker/overlay2/e833f2daeaeafbd162f47ffd103a827dbde6b37d84615071cdcea652e1a4864c/diff",
                "MergedDir": "/var/lib/docker/overlay2/eb2d1398df0e4691939304e58ddd056debfb456cb2b94eb378492c05c6f0e1cd/merged",
                "UpperDir": "/var/lib/docker/overlay2/eb2d1398df0e4691939304e58ddd056debfb456cb2b94eb378492c05c6f0e1cd/diff",
                "WorkDir": "/var/lib/docker/overlay2/eb2d1398df0e4691939304e58ddd056debfb456cb2b94eb378492c05c6f0e1cd/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/Users/jthamm/udemi/docker/complex/server",
                "Destination": "/app",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Type": "volume",
                "Name": "482ec180bb09cac7e40d4c53eb8a783cffe1f37f2610a3c6beee9c8e90335264",
                "Source": "/var/lib/docker/volumes/482ec180bb09cac7e40d4c53eb8a783cffe1f37f2610a3c6beee9c8e90335264/_data",
                "Destination": "/app/node_modules",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "01ca2b178529",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "REDIS_HOST=redis",
                "REDIS_PORT=6379",
                "PGUSER=postgres",
                "PGHOST=postgres",
                "PGDATABASE=postgres",
                "PGPASSWORD=postgres_password",
                "PGPORT=5432",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NODE_VERSION=14.14.0",
                "YARN_VERSION=1.22.5"
            ],
            "Cmd": [
                "npm",
                "run",
                "dev"
            ],
            "Image": "complex_api",
            "Volumes": {
                "/app": {},
                "/app/node_modules": {}
            },
            "WorkingDir": "/app",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "a10d82056b6261d0a578b99b7aa19e5064a60b05f0b673f4df45a7c9fd67e89a",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "complex",
                "com.docker.compose.project.config_files": "docker-compose.yaml",
                "com.docker.compose.project.working_dir": "/Users/jthamm/udemi/docker/complex",
                "com.docker.compose.service": "api",
                "com.docker.compose.version": "1.27.4"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "cb6ae86e99617f9a947044638a4c3658fa11cd1f84648c6d1c0d25e318d3cd16",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/cb6ae86e9961",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "complex_default": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "api",
                        "01ca2b178529"
                    ],
                    "NetworkID": "f69703d7049d87b614950f4ca1b7d1b2ee84dcb6025fa7c4fdb08c20efc9da01",
                    "EndpointID": "a3d1ae6d38e1bfd0c983e2b0668164664c51a48fbfd4e9b8be794868e6afc9bd",
                    "Gateway": "172.23.0.1",
                    "IPAddress": "172.23.0.5",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:17:00:05",
                    "DriverOpts": null
                }
            }
        }
    }
]
