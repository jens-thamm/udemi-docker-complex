[
    {
        "Id": "55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab",
        "Created": "2021-01-28T11:45:06.1036706Z",
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
            "Pid": 13890,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-01-28T11:45:10.2197024Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:b814ba3905eb81749cbd349dafdbac44c63d5fba3b150708d4ff786b2468ecda",
        "ResolvConfPath": "/var/lib/docker/containers/55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab/hostname",
        "HostsPath": "/var/lib/docker/containers/55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab/hosts",
        "LogPath": "/var/lib/docker/containers/55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab/55cd8b1eecf8d84a28c0c1898481cad0aff4fe42669cf91c762e8212e3083fab-json.log",
        "Name": "/complex_worker_1",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/Users/jthamm/udemi/docker/complex/worker:/app:rw"
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
                "LowerDir": "/var/lib/docker/overlay2/fda27609138105fdf443f6180597a38d5e0315d61a33e657cc13ed729efec00c-init/diff:/var/lib/docker/overlay2/3b8f7c942b248d80408ca4df027eb1a37f78754605d69a1a1adc7e8af84acaae/diff:/var/lib/docker/overlay2/b7122882d3ac6090be88dc9654243c0aa8a8f1f29e34722dca96f4bfa28fa6ed/diff:/var/lib/docker/overlay2/ba2b54ff4df7d5491e65020ceb81bbdd4faf7a54d41b4b82f0c77d497c878c35/diff:/var/lib/docker/overlay2/ac06fa80df74149241efe0ff369db9ab996ea2c262f7e67f601ac0929833e5d9/diff:/var/lib/docker/overlay2/05d6c8a30d47912e6f2a46acf7b5fc12c7cb5164208c151c0118b7e54aa0172b/diff:/var/lib/docker/overlay2/4b8c513c1e60a6b414eebf6a81950010e7e1e1366915a48dd2e00939cdf4d021/diff:/var/lib/docker/overlay2/c7ab2cc39e12104c475b66599ec0b7f8573f623097110072cb01c0c80abdfc68/diff:/var/lib/docker/overlay2/e833f2daeaeafbd162f47ffd103a827dbde6b37d84615071cdcea652e1a4864c/diff",
                "MergedDir": "/var/lib/docker/overlay2/fda27609138105fdf443f6180597a38d5e0315d61a33e657cc13ed729efec00c/merged",
                "UpperDir": "/var/lib/docker/overlay2/fda27609138105fdf443f6180597a38d5e0315d61a33e657cc13ed729efec00c/diff",
                "WorkDir": "/var/lib/docker/overlay2/fda27609138105fdf443f6180597a38d5e0315d61a33e657cc13ed729efec00c/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/Users/jthamm/udemi/docker/complex/worker",
                "Destination": "/app",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Type": "volume",
                "Name": "01de591ad9e715ee97deed417485a88a57bd273d1756525a62ac4880413ba13f",
                "Source": "/var/lib/docker/volumes/01de591ad9e715ee97deed417485a88a57bd273d1756525a62ac4880413ba13f/_data",
                "Destination": "/app/node_modules",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "55cd8b1eecf8",
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
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NODE_VERSION=14.14.0",
                "YARN_VERSION=1.22.5"
            ],
            "Cmd": [
                "npm",
                "run",
                "dev"
            ],
            "Image": "complex_worker",
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
                "com.docker.compose.config-hash": "141bfe19f3d8fa6487c5d9d6c373df2a2836dec5a80db58ba5a8b18b383391aa",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "complex",
                "com.docker.compose.project.config_files": "docker-compose.yaml",
                "com.docker.compose.project.working_dir": "/Users/jthamm/udemi/docker/complex",
                "com.docker.compose.service": "worker",
                "com.docker.compose.version": "1.27.4"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "8398f3825edd2e2fda5c151bc9e919bb8bf4933253f06aa4cc8ba91602617a3b",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/8398f3825edd",
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
                        "55cd8b1eecf8",
                        "worker"
                    ],
                    "NetworkID": "f69703d7049d87b614950f4ca1b7d1b2ee84dcb6025fa7c4fdb08c20efc9da01",
                    "EndpointID": "d48f9aeb0ad623c6c21ff9e20368bcbbb48b6131786bbc61e0485bd28dfd8010",
                    "Gateway": "172.23.0.1",
                    "IPAddress": "172.23.0.4",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:17:00:04",
                    "DriverOpts": null
                }
            }
        }
    }
]
