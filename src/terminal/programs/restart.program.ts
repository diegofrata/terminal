import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";
import { GlitchComponent } from "../core/glitch.component";
import { sleeper } from '../core/util';
import { ClearProgram } from "./clear.program";
import { FrameComponent } from "../core/frame.component";
import { LoginProgram } from "./login.program";
import { LoginService } from "../core/login.service";

@Injectable()
@Program({
    alias: 'restart',
    description: 'Restarts the system.'
})
export class BootProgram extends ProgramBase {
    log = [
        `Uncompressing Linux... done, booting the kernel.`,
        `Booting Linux on physical CPU 0x0`,
        `Initializing cgroup subsys cpu`,
        `Initializing cgroup subsys cpuacct`,
        `Linux version 3.18.10+ (dc4@dc4-XPS13-9333) (gcc version 4.8.3 20140303 (prerelease) (crosstool-NG linaro-1.13.1+bzr2650 - Linaro GCC 2014.03)) #775 PREEMPT Thu Apr 2 18:10:12 BST 2015`,
        `CPU: ARMv6-compatible processor [410fb767] revision 7 (ARMv7), cr=00c5387d`,
        `CPU: PIPT / VIPT nonaliasing data cache, VIPT nonaliasing instruction cache`,
        `Machine model: Raspberry Pi Model B`,
        `cma: Reserved 8 MiB at 0x0b800000`,
        `Memory policy: Data cache writeback`,
        `Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 48768`,
        `Kernel command line: dma.dmachans=0x7f35 bcm2708_fb.fbwidth=656 bcm2708_fb.fbheight=416 bcm2708.boardrev=0x2 bcm2708.serial=0xb51cb961 smsc95x.macaddr=B8:27:EB:1C:B9:61 bcm2708_fb.fbswap=1 sdhci-bcm2708.emmc_clock_freq=250000000 vc_mem.mem_base=0xec00000 vc_mem.mem_size=0x10000000  dwc_otg.lpm_enabe=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait`,
        `PID hash table entries: 1024 (order: 0, 4096 bytes)`,
        `Dentry cache hash table entries: 32768 (order: 5, 131072 bytes)`,
        `Inode-cache hash table entries: 16384 (order: 4, 65536 bytes)`,
        `Memory: 177372K/196608K available (5885K kernel code, 348K rwdata, 1868K rodata, 340K init, 733K bss, 19236K reserved)`,
        `Virtual kernel memory layout:`,
        `    vector  : 0xffff0000 - 0xffff1000   (   4 kB)`,
        `    fixmap  : 0xffc00000 - 0xffe00000   (2048 kB)`,
        `    vmalloc : 0xcc800000 - 0xff000000   ( 808 MB)`,
        `    lowmem  : 0xc0000000 - 0xcc000000   ( 192 MB)`,
        `    modules : 0xbf000000 - 0xc0000000   (  16 MB)`,
        `        .text : 0xc0008000 - 0xc079a78c   (7754 kB)`,
        `        .init : 0xc079b000 - 0xc07f0000   ( 340 kB)`,
        `        .data : 0xc07f0000 - 0xc084711c   ( 349 kB)`,
        `        .bss : 0xc084711c - 0xc08fe848   ( 734 kB)`,
        `SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1`,
        `Preemptible hierarchical RCU implementation.`,
        `NR_IRQS:522`,
        `sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps every 2147483648000ns`,
        `Switching to timer-based delay loop, resolution 1000ns`,
        `Console: colour dummy device 80x30`,
        `console [tty1] enabled`,
        `Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=10000)`,
        `pid_max: default: 32768 minimum: 301`,
        `Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)`,
        `Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)`,
        `Initializing cgroup subsys memory`,
        `Initializing cgroup subsys devices`,
        `Initializing cgroup subsys freezer`,
        `Initializing cgroup subsys net_cls`,
        `Initializing cgroup subsys blkio`,
        `CPU: Testing write buffer coherency: ok`,
        `ftrace: allocating 19229 entries in 57 pages`,
        `Setting up static identity map for 0x553698 - 0x5536d0`,
        `devtmpfs: initialized`,
        `VFP support v0.3: implementor 41 architecture 1 part 20 variant b rev 5`,
        `pinctrl core: initialized pinctrl subsystem`,
        `NET: Registered protocol family 16`,
        `DMA: preallocated 4096 KiB pool for atomic coherent allocations`,
        `bcm2708.uart_clock = 3000000`,
        `No ATAGs?`,
        `hw-breakpoint: found 6 breakpoint and 1 watchpoint registers.`,
        `hw-breakpoint: maximum watchpoint size is 4 bytes.`,
        `mailbox: Broadcom VideoCore Mailbox driver`,
        `bcm2708_vcio: mailbox at f200b880`,
        `bcm_power: Broadcom power driver`,
        `bcm_power_open() -> 0`,
        `bcm_power_request(0, 8)`,
        `bcm_mailbox_read -> 00000080, 0`,
        `bcm_power_request -> 0`,
        `Serial: AMBA PL011 UART driver`,
        `dev:f1: ttyAMA0 at MMIO 0x20201000 (irq = 83, base_baud = 0) is a PL011 rev3`,
        `console [ttyAMA0] enabled`,
        `SCSI subsystem initialized`,
        `usbcore: registered new interface driver usbfs`,
        `usbcore: registered new interface driver hub`,
        `usbcore: registered new device driver usb`,
        `Switched to clocksource stc`,
        `FS-Cache: Loaded`,
        `CacheFiles: Loaded`,
        `NET: Registered protocol family 2`,
        `TCP established hash table entries: 2048 (order: 1, 8192 bytes)`,
        `TCP bind hash table entries: 2048 (order: 1, 8192 bytes)`,
        `TCP: Hash tables configured (established 2048 bind 2048)`,
        `TCP: reno registered`,
        `UDP hash table entries: 256 (order: 0, 4096 bytes)`,
        `UDP-Lite hash table entries: 256 (order: 0, 4096 bytes)`,
        `NET: Registered protocol family 1`,
        `RPC: Registered named UNIX socket transport module.`,
        `RPC: Registered udp transport module.`,
        `RPC: Registered tcp transport module.`,
        `RPC: Registered tcp NFSv4.1 backchannel transport module.`,
        `bcm2708_dma: DMA manager at f2007000`,
        `vc-mem: phys_addr:0x00000000 mem_base=0x0ec00000 mem_size:0x10000000(256 MiB)`,
        `futex hash table entries: 256 (order: -1, 3072 bytes)`,
        `audit: initializing netlink subsys (disabled)`,
        `audit: type=2000 audit(1.030:1): initialized`,
        `VFS: Disk quotas dquot_6.5.2`,
        `Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)`,
        `FS-Cache: Netfs 'nfs' registered for caching`,
        `NFS: Registering the id_resolver key type`,
        `Key type id_resolver registered`,
        `Key type id_legacy registered`,
        `msgmni has been set to 362`,
        `Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)`,
        `io scheduler noop registered`,
        `io scheduler deadline registered (default)`,
        `io scheduler cfq registered`,
        `BCM2708FB: allocated DMA memory 4bc00000`,
        `BCM2708FB: allocated DMA channel 0 @ f2007000`,
        `Console: switching to colour frame buffer device 82x26`,
        `bcm2708-dmaengine bcm2708-dmaengine: Load BCM2835 DMA engine driver`,
        `uart-pl011 dev:f1: no DMA platform data`,
        `vc-cma: Videocore CMA driver`,
        `vc-cma: vc_cma_base      = 0x00000000`,
        `vc-cma: vc_cma_size      = 0x00000000 (0 MiB)`,
        `vc-cma: vc_cma_initial   = 0x00000000 (0 MiB)`,
        `brd: module loaded`,
        `loop: module loaded`,
        `vchiq: vchiq_init_state: slot_zero = 0xcb800000, is_master = 0`,
        `Loading iSCSI transport class v2.0-870.`,
        `usbcore: registered new interface driver smsc95xx`,
        `dwc_otg: version 3.00a 10-AUG-2012 (platform bus)`,
        `Core Release: 2.80a`,
        `Setting default values for core params`,
        `Finished setting default values for core params`,
        `Using Buffer DMA mode`,
        `Periodic Transfer Interrupt Enhancement - disabled`,
        `Multiprocessor Interrupt Enhancement - disabled`,
        `OTG VER PARAM: 0, OTG VER FLAG: 0`,
        `Dedicated Tx FIFOs mode`,
        `WARN::dwc_otg_hcd_init:1047: FIQ DMA bounce buffers: virt = 0xcbc14000 dma = 0x4bc14000 len=9024`,
        `FIQ FSM acceleration enabled for :`,
        `Non-periodic Split Transactions`,
        `Periodic Split Transactions`,
        `High-Speed Isochronous Endpoints`,
        `WARN::hcd_init_fiq:412: FIQ on core 0 at 0xc03fad8c`,
        `WARN::hcd_init_fiq:413: FIQ ASM at 0xc03fb064 length 36`,
        `WARN::hcd_init_fiq:438: MPHI regs_base at 0xcc806000`,
        `dwc_otg bcm2708_usb: DWC OTG Controller`,
        `dwc_otg bcm2708_usb: new USB bus registered, assigned bus number 1`,
        `dwc_otg bcm2708_usb: irq 32, io mem 0x00000000`,
        `Init: Port Power? op_state=1`,
        `Init: Power Port (0)`,
        `usb usb1: New USB device found, idVendor=1d6b, idProduct=0002`,
        `usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1`,
        `usb usb1: Product: DWC OTG Controller`,
        `usb usb1: Manufacturer: Linux 3.18.10+ dwc_otg_hcd`,
        `usb usb1: SerialNumber: bcm2708_usb`,
        `hub 1-0:1.0: USB hub found`,
        `hub 1-0:1.0: 1 port detected`,
        `usbcore: registered new interface driver usb-storage`,
        `mousedev: PS/2 mouse device common for all mice`,
        `bcm2835-cpufreq: min=700000 max=700000`,
        `sdhci: Secure Digital Host Controller Interface driver`,
        `sdhci: Copyright(c) Pierre Ossman`,
        `DMA channels allocated for the MMC driver`,
        `Load BCM2835 MMC driver`,
        `sdhci-pltfm: SDHCI platform and OF driver helper`,
        `ledtrig-cpu: registered to indicate activity on CPUs`,
        `hidraw: raw HID events driver (C) Jiri Kosina`,
        `usbcore: registered new interface driver usbhid`,
        `usbhid: USB HID core driver`,
        `TCP: cubic registered`,
        `Initializing XFRM netlink socket`,
        `NET: Registered protocol family 17`,
        `Key type dns_resolver registered`,
        `registered taskstats version 1`,
        `vc-sm: Videocore shared memory driver`,
        `[vc_sm_connected_init]: start`,
        `[vc_sm_connected_init]: end - returning 0`,
        `Waiting for root device /dev/mmcblk0p2...`,
        `Indeed it is in host mode hprt0 = 00021501`,
        `mmc0: host does not support reading read-only switch, assuming write-enable`,
        `mmc0: new high speed SDHC card at address b368`,
        `mmcblk0: mmc0:b368 SMI   15.0 GiB`,
        `    mmcblk0: p1 p2`,
        `EXT4-fs (mmcblk0p2): INFO: recovery required on readonly filesystem`,
        `EXT4-fs (mmcblk0p2): write access will be enabled during recovery`,
        `EXT4-fs (mmcblk0p2): recovery complete`,
        `EXT4-fs (mmcblk0p2): mounted filesystem with ordered data mode. Opts: (null)`,
        `usb 1-1: new high-speed USB device number 2 using dwc_otg`,
        `VFS: Mounted root (ext4 filesystem) readonly on device 179:2.`,
        `Indeed it is in host mode hprt0 = 00001101`,
        `devtmpfs: mounted`,
        `Freeing unused kernel memory: 340K (c079b000 - c07f0000)`,
        `usb 1-1: New USB device found, idVendor=0424, idProduct=9512`,
        `usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0`,
        `hub 1-1:1.0: USB hub found`,
        `hub 1-1:1.0: 3 ports detected`,
        `usb 1-1.1: new high-speed USB device number 3 using dwc_otg`,
        `usb 1-1.1: New USB device found, idVendor=0424, idProduct=ec00`,
        `usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0`,
        `smsc95xx v1.0.4`,
        `smsc95xx 1-1.1:1.0 eth0: register 'smsc95xx' at usb-bcm2708_usb-1.1, smsc95xx USB 2.0 Ethernet, b8:27:eb:1c:b9:61`,
        `udevd[159]: starting version 175`,
        `EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)`,
        `EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)`,
        `random: nonblocking pool is initialized`,
        `Driver for 1-wire Dallas network protocol.`,
        `i2c /dev entries driver`,
    ];


    constructor(private loginService: LoginService) {
        super();
    }

    async run(frame: FrameComponent, args: string[]) {
        const grandParent = frame.parent.parent;
        grandParent.children.forEach(x => x.clear());

        this.frame = await grandParent.children[grandParent.children.length - 1];

        await this.main(args);
    }

    async main(args: string[]) {
        this.frame.enableForceScrolling();
        await this.simulateBoot();
    }

    async simulateBoot() {

        this.frame.append(GlitchComponent, c => c.instance.text = 'frataOS');
        await sleeper(1000);
        this.frame.clear();

        for (const line of this.log) {
            this.frame.write(line);
            const ms = Math.pow(Math.random(), 2) * 500;
            await sleeper(ms);
            this.frame.writeLine();
        }

        await (new ClearProgram().run(this.frame, []));
        this.frame.clear();
        await (new LoginProgram(this.loginService).run(await this.frame.createFrame(), []));
    }
}