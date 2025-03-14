function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
let map = img`
    56666666666665656663666366666365
    6.......6......................6
    6.......6......................6
    6...7...5......................6
    6...7...6..7777777777....6666666
    6...1...6..7777777777..........6
    6...2...6..66666.......7.......6
    6...7...6......6.......4.......6
    6...1...64664666.......7.......6
    6...7..................7.......6
    666666666665666566..665666656666
    6..............................6
    6..............................6
    6....7777777477777777774777....6
    6....6666666666666666666666....6
    6....6666266666266666266666....6
    6..............................6
    6..............................6
    677727777771777717772777.......6
    6..............................6
    6............77777777777.......6
    6..........777.........777777776
    6..6....7777...................6
    6..6....6.....77777....777.....6
    6..6....6.....7...77...7.77....6
    6..6....6.....77...7....7.77..76
    6..6....667....7...7...7...7..76
    6..6......777..7...77777...77776
    6..6........7777...............6
    6..............................6
    6..............................6
    56666666666666666666666666666665
    `
let textures = [
img`
    8888888888bbbbbb8888888888888888
    8888888bbb444444bb88888888888888
    888882244444ddd444b8888888888888
    8888244444444dddd44e888888888888
    888244444444444ddd4be88888888888
    88244fffff4444444d44be8888888888
    82b44fffff44444444d4be8888888888
    82b44fffff4444fffff4bbe888888888
    2bbb4fffff4444fffff4bbe888888888
    2bbb4fffff4444fffff4bbe888888888
    2bb4b444444444fffff44bbe88888888
    2bb44444444444fffff444be88888888
    2bb44444444444444444444e88888888
    2bbb4fffff4444444444444e88888888
    22bbbfffff4bb444444444be88888888
    82bbbfffffbbb44444444bbe88888888
    822bbfffffb44bbb444444bbe8888888
    88eeefffffbb44bbb444444be8888888
    888eeeeebbbbbbbb44b4444be8888888
    88888eeeeee222bb44bbb4bbe8888888
    8888888eeeee222bb44bbbbee8888888
    888888888888e222bbbbbbbec8888888
    88888888888888ee2bbbbeebdb888888
    88888888888888888eeeeecdddb88888
    88888888888888888888888cd11bbbb8
    888888888888888888888888cd111dbb
    8888888888888888888888888b11111c
    8888888888888888888888888c11dd1c
    8888888888888888888888888cd1dbc8
    8888888888888888888888888cb11c88
    88888888888888888888888888ccc888
    88888888888888888888888888888888
    `,
null,
img`
    9999999999993333bb99bb3333399999
    999999993bb31111d3b311d111d33999
    99999993bdd11111dbd11d1111111399
    9999999bdddd1111bd11d111dd111139
    9999993d111dd111b11d111dd33d11d3
    9999993fffff1dd1d11d111d11d33113
    9999bb3fffff11dd13dd111d1dd3b31b
    999b3d3fffff111dd13dd11d1dddbbdb
    9993dddfffff1111dd133dddddddb9b9
    9931111fffffd1111dfffffdddd33999
    993111111d111dd111fffff1dd331399
    99bddd1111ddd11dd1fffff111111399
    99311ddd111dddd11dfffffd1111ddb9
    9931111dd111dddd11fffffdddddddb9
    999bd1111d1113ddd11dd1111111d3b9
    9994dd11fffff13ddd11ddd111d333b9
    994dbdddfffff1133ddddddddddddb99
    94ddbdddfffff111d33ddddddddd3b99
    94dddb11fffffdd111d333dddd3bb999
    94dd55b1fffffdd11111d3333bbb9999
    9445555b111d11dddd111111ddb99999
    94455555bd1d311ddddddddddd399999
    945455555bb1d3111ddddddd11399999
    94554555555b333d1111111113999999
    455554555555bbb33d11111d33999999
    4d555545555555dbbb3d11d339999999
    4dd5555455555ddddd43333999999999
    45dd555544ddddddd499999999999999
    945dd5555d44dddd4999999999999999
    9945dd55dddd44449999999999999999
    99945dd5544499999999999999999999
    99994444499999999999999999999999
    `,
null,
img`
    6666666666666666666666bbb6666666
    66666666666666666666bb333b666666
    66666666666666666bbb333d33b66666
    6666666666666666bb333333d3a66666
    66666666666666bb33332eeeedba6666
    666666666666bbb333323eee2e3a6666
    6666666666bbd333333e22222ed3a666
    6666666bbbdd3fffff3e22222edda666
    666666bb3d333fffff3be222eb3d3a66
    666bbb3dd3333fffff33beeeb33d3a66
    66b3ddd333333fffff333333333dda66
    bbddd33333333fffff333333333dd3a6
    b33dddddd333333333333fffff33d3a6
    bb3333333ddddd3333333fffff33dda6
    bbbbbbb333dd33dddddddfffff33ddba
    b55553bfffff3333dd333fffff33dd3a
    b555555fffff3bbbbbbbbfffffdddd3a
    bd55555fffff55555dddbaaaaab3d3ba
    bb55555fffff5555555dddddddbb33ba
    b3bb355fffff555d5555d55dddddbbba
    b33333bbb355dd55555d555ddddddbba
    b5555d333333bbb35dddddd55ddddbba
    b5d555dd5553333bbbbb3ddddddddb3a
    b5d555555555555dd3333bbbbbb3db3a
    bd5d555555d55555dd555ddbbbbbbb3a
    bbb55dd555555555555555ddddddbb3a
    666bbbbdd555ddd5555ddddddddddb3a
    6666666bbbb555555d5ddd5ddddddb3a
    66666666666bbbb55555555555dd533a
    666666666666666bbbbddd5d55d5b3ba
    6666666666666666666bbbbddddb3ba6
    66666666666666666666666bbbaaaa66
    `,
null,
img`
    11111111111111bbbbbbb11111111111
    11111111111bb66663333baa11111111
    111111111bb3367776333663aa111111
    11111111b33333888333389633aa1111
    1111111b3333333333333389633aa111
    111111b34443333333333338633bae11
    11111b3455433333333334443333ae11
    1111b33fffff3dddd3333455233daee1
    111b3d3fffffdd3bbbb33322333dabe1
    11b3d33fffff3bb33bb33333333da4e1
    11bd333fffffb33aab3333333223a4ee
    1b3d366fffff33aafffff6332442b4ee
    1bd3b983333a3aa3fffff7633ee3b4ee
    1bd6983333baaa33fffff87633bb4bee
    b3d6833333bba333fffff3863ba44ebe
    bdd3333333bb3333fffff3333a44bebe
    add6666fffff322333366333ba44bbbe
    ad67776fffff2442336983d3a444b4e1
    add888bfffff3ee3369833d3a44b44e1
    add3333fffff333336833d3a444b4e11
    a3dd333fffff33333dddd3a444b44e11
    ab33ddd325543333dd33aa444b44e111
    1eabb3dd32233333baaa4444b44e1111
    1ebabb3d333d33baa444443b44e11111
    11ebaab3ddd3aaa4444433b44e111111
    11eebbaab33a44444333b444e1111111
    111eeebbaab444b333b4444e11111111
    1111ebeeebbbbbbbb4444ee111111111
    11111eebbbb44444444ee11111111111
    1111111eeebbb444eee1111111111111
    1111111111eeeeee1111111111111111
    11111111111111111111111111111111
    `,
null,
img`
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    111111111ffffff11111111111111111
    11111111feee111ff111111111111111
    1111111feeee1111eff1111111111111
    111111feeeee1111331f111111111111
    111111feeeee11113ee1f11111111111
    11111feeeeee1111eeedf11111111111
    11111feeeeee111f1eedf11111111111
    11111feeeee1111ffeedf11111111111
    111111feeee1111eeeef111111111111
    1111111f3fe1f3feeef1111111111111
    1111111f33fff33ffff1111111111111
    11111111ff111ff11111111111111111
    11111111111111111111111111111111
    111ff111ff1111111111111111111111
    11f11f11f1f111111111111111111111
    11111f11f11f11111111111111111111
    1111f111f11f11111111111111111111
    11111f11f11f11111111111111111111
    11f11f11f1f111111111111111111111
    111ff111ff1111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    `,
null,
img`
    66666666666666666666888888888888
    66666666666666666666855555555558
    66666666666666666666855555555558
    88888888888886666666855555555558
    87777777777786666666855555555558
    87777777777786666666855555555558
    87777777777786666666855555555558
    87777777777788888888888885555558
    87777777777788555555855585555558
    87777777777788555555855585555558
    87777777777788555555855585555558
    88888888888888555555855585555558
    66666666666668555555888888888888
    66666666666668555555555586666666
    66666666666668555555555586666666
    66666666666668555555555586666666
    66666666666668888888888886666666
    66666666666666666666666666666666
    66666666666666666688888888888888
    88888888888666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    87777777778666666685555555555558
    88888888888666666688888888888888
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    `,
img`
    99999999999999999999888888888888
    99999999999999999999855555555558
    99999999999999999999855555555558
    88888888888889999999855555555558
    87777777777789999999855555555558
    87777777777789999999855555555558
    87777777777789999999855555555558
    87777777777788888888888885555558
    87777777777788555555855585555558
    87777777777788555555855585555558
    87777777777788555555855585555558
    88888888888888555555855585555558
    99999999999998555555888888888888
    99999999999998555555555589999999
    99999999999998555555555589999999
    99999999999998555555555589999999
    99999999999998888888888889999999
    99999999999999999999999999999999
    99999999999999999988888888888888
    88888888888999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    87777777778999999985555555555558
    88888888888999999988888888888888
    99999999999999999999999999999999
    99999999999999999999999999999999
    99999999999999999999999999999999
    `,
img`
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    1111eee11eee1111eee1111eee1eee11
    1111eee11eee1111eee1111eee1eee11
    1111eee11eee1111eee1111eee1eee11
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    333eee333eee333eee333eee333eee33
    333eee333eee333eee333eee333eee33
    333eee333eee333eee333eee333eee33
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    `,
img`
    99988888888888888888888888888888
    99988888888888888888888888888888
    99988888888888888888888888888888
    55558888888888888888888888888888
    55555555555888888888888888888888
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555998
    99988888888888888888888888888888
    98888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888885
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555558888888888
    55555555555555588888888888888888
    55888888888888888888888888888888
    55888888888888888888888888888888
    99888888888888888888888888888888
    99888888888888888888888888999999
    99888888888888888889999999999999
    `
]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    st.updateControls()
})
