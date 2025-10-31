import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample data for top categories
const ProductsData = [
  {
    id: 1,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSEBIWFRUVFRYVFRUVFRUVFhYYGBUWFhUVFRcYHSggGBolGxcWIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGC0lHyUtLy0tKy0tLS0rLS0rLS0tLS03LS0tLS0tLS0tKy0tLS0rLS0tLS0rLS0tLS0tLS0tLS0tK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIDBQUFBgUEAQUAAAABAAIRAyEEEjEFQVFhcQYiMoGRE0KhscEHI1Ji0fAUcoKy4TOSwvEkFWNzoqP/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBQQG/8QALBEAAgIBBAECBgEFAQAAAAAAAAECEQMEEiExQQUiEzJRYXHRgTNCoeHwI//aAAwDAQACEQMRAD8A9eSwgJV586wRCVCABCWEJiEQlSoEJCISoQFiISoQAkISoQAkIhZW3u0uCwInFV2sJuG3c87pDWyY56Lj6n2zbMBcAzEOyzEU2gP/AJZfb+qNFZHFOXKQrPRIQud7Kdt8FtKW0HFtQCTRqgNqAcQASHC4uCdV0cKEouLpjTGwhLCIURjSEichAxqSE6EiQxEidCRAx6VCVMgIEsISpiBCEqAEQlQmAIQhAgQhCABQY6t7Om5+uUEgcTuHqrCy+0rHOwzgxxaS6nBbEwKjXOF9xAM/RNdjXLo4DGdm8Pjc4qlr6xJc52ce0DjvJFxugRAECIXl+2tjfwFQsqtl3u5ouOMBe2bMwLmV6jmVYpEBwpNaBDj4iXe9JnSBd0zuo9pezNPGvY+rOVkkiYzQCcsjcV2Qy7GdU8W5ccUeG0Novp1hVpPNN7Tma5hggwBr6+q+ivs87WjaWGl1q1MAVRoCdA8CbAwV439qdDC0cXTpYamxjmUgKwYABJ8EgQM0CdNHN5KX7KttHC41t+7VhjvNw/yf3BtzwWSF+TkqnR9FIQ1wIkb0LMGNQnFNhIYiSE5IgYkIQhIByVCVSIglSJUwBCEqBCJQhCBAhCEACEIQAKjtvAnEYd9IGC4CDpcEOHlICvITGnXJwux6lQy+oXAU5YQ4sk3uXBrRluLDM7fcp9fGvqZvYBjixpIzuIBdoBa5uZ6ArnO3GIxIxgo0ifZVHzcgNzES64Eka2V7F7WqYbDuomgZ9k9wyiW5oMO0gtGvkuhfMnLg77vHcezxLa9Ko3EONRxc54a8l2pzgOmUbOqlj2kGIM6/C3ot7t1s9zaeHrZbexZTeeBaIE+chcxQqQbajT5rtg90DjyR2zZ9Vdl9oCvhqb+I8wR7pi0jlwWuV5p9ku0m+z9lmJBAeJmxHdc2/MH0XpizMkdsmiLESJUirASEickSGIhCEAOQlQpCBCEoQIEIQgQISqttDGsoU3VKhhrdT8AmNKywlXM7P7Y0qroyPaPzte0kfiaHNBI5/VdKxwIBBkG4I0I3EJuLXY5Rce0CVCEiJR2vtSlhaRq1jAFgBcuPBo3n9FxG0PtLkEUsMRaxe8Ai34WgzFt6yO3O2TiMW5o/06WZjLx3gSHu5nM2AOTdxXMNbOnHdoNSd86DmfQLvxaaNXLs2dJoIOO7Ijdo7aFR2bET4iQQHOaNCbTIudZOvMLYxfaTC1KYpmodHCfZ1LBzHNi7eYXHMZPwtbeSSIEHhYdN7VHUYBpobjpwP74FXPTwk7NGOjxN11+DqMbtPBOplufPqQ32L9Tr4oEFcDX2JRcZyBpn3O6PTRarQh6thhjDoujosKXKv8lzsExuExTZe4teQ3j3i4BpgdXC3Fe7hfPmFqlr2uaYLXAgwTBbeYHAifJe3dm9ssxdAPBGcWqNFod01AOt+m5cOsx17kYnqemjiaeNceTUQlKRcJliJE5IkMRCEqQCoQlUxAhCECFQhCYAsXtbsmti8OaVGoKbi4S45oy+94b6bltIQnQ02naPKcRsjG4FlFggQTme6oAyZcQxhdaIvpOu5XOy/aaoyu0VnFtBx9nDocM7jLS0jQSbkWi67/amzmYhmR8iHNe1zYzNc0y1wkET1BXDY/swKGJZmcXUwwmjIEmoRDw+ABYRAAFj+VXRaa5OlZPi+2R6KqO3NojDYepWPutsOLjZo/3ELI7O7Zhww1Y97Sk4+8PwE/iG7iOYvz/2n7Q9pUpYRpMCHvAvJdLabeZF7G3eajFj3TSIYsDllUH/AMjhHAktmTmMiXAFxJyujrYT+W2ijoukSYvOgAGp0nTruifdSVH8wcwJJkGTEEl3HMA+PzHimUXc55x+4/x5LUR6aHBoGkYNiPFqIGuQCBIndG42/Cke2RB01Hk20btToCPEOLQnAiDZg7rtMwnT10Ig6wW6hpT3d6bklxdcEPHhmSRrImbXBnVpCkLe7KJaWmCIP+LHpF/NNcrFchwtAvYkZT4ASDFtfiQRZ1qDK24/9BSs64T3IVriHMA8RDnATFz3QAeILwf6V0HZnajsNiGVA4kCA9o1LDIiB4gGw8Ecp5ZOM2NWYxuMs5hpluWO83M/K10HUEEGdxjddRtpkxmBO4CbGXZRkduEMAANu6qN0Z2lz4M/JtyuS/g9+o1WvaHMIc1wBa4GQQbghPXHfZnj8+HfRdrSdLRvyPmJ4GWuP9QO9disnJDZJo85lg8c3F+AQhIqyAIQhIY5CEKZEEISoAEIQmAISpEACp7XwAxFIsmDqx34XDwu/XiCQriVCBOjzmtFUOp1Rlq0zlc3eCN4PDQg8wVzG2MNWdUqPe51SQ3NMe6A1pceFhJ5ydJXpnans6cSPa0HBldogE+GoB7j/od07157hsXiH1jh20nHESWmmRdp0JduDfzaQr8c3F2jU0+ePzeUc2c9V7WU2lxc7utF3S4zAGguT6kcFt9qNkfwdSjSMT/D0S6He/dj4nm3U9eK9E7K9jKOBPtS41KxbBcQ0MZN3Ck0AZR1kx1M8B262tTxmLL6R7jGCkHXGeC5xIndLiBa8TcFdkMnxJ1Ho6sGolnzpY17UjKpVbRJMgttBsWgXB1FhbhGhAmfWCRqQTLZ8QiZZBMkai838Ug5vtnGzSeZJsNfXU+qcSY8RnqZ3D6D0XTRqfAbJyCQADqG6axfQHru1zcHrC2tVfTMjV0SeBjTrzOsFa5edCZHA3/Fx6n1VLFAOMECJFrwL2uTMSoyTRDJCUfJ6nTYz2OSoAWGmGuDtCC2CCuMqdmqgcTTf9zmOUvkGNwDTIMAkTF5OkrqsUaVK9aoHuGg0aOjQs8OrYkzTacv4391gHLe7yWPjk8VuzHg/h82O7CYWrQxtPM8FrxUaQHOOoc8ASLgZRrzXqS5XsxsKlSeKrialUTDjZrZEHKwaWm5k3K6pRnk3uzh1M987BIlSKBQCEISAchCVTIghCEACEIQAIQhAAlQmveACSYAuSbADiSmIco69VlNrnvIa0CXOJAAA3klcrtrt9haEto/fv8AyGKY61ND/TK8+272kxOMP3z4YDIpt7rBwke8eZldWPTTl3wjQ03pubNy1S+r/Rv9re3LqwdRwstpGzqmjnjeG/hbz1PJcJMmB68E1zi4wNN5UrG7gtCGOMVUT0un02PDHbBf7HUxuGiV1z+/3uTgIURdad5BP6Kw6Am3p+/imUqIdVY1wMPexrjyJgxzTjqOv6BAflc13CD6SVGatFORblR6JR2bRYZDATxd3j6umFfaVEVIxeYbfk8uzX2PXAdlO/Rbi5Sg8tII1C6TCYkVGyNd4VkH4KMi8lhIhCmVAhCEAPQhCmRBCEIAEIUeJrsptL6jg1o1c4gAeZToCRI5wAkmANSdAuS2v9oGFpAijNV+gEFjQfzOcJjoCvONt9osViz97ULhNmN7tMf0jXzkrpx6Wcu+DQ0/pmbLy1tX3/R6Nt/t/hqEtoffv4tMUx1f73RvqF53tjtBisafvqhybmN7tMdG+91MlZLKZOvonvqxZtz8B1XdjwQgbun0GHBylb+rFcQB9N5Vd7iTlGvwaOJ4lNqPJOVpl3vO3NH73KejSDRA8zvJ4lXdnb2FNkCApgIStah3BNExlTSONv1UTzLiOYaPK5+qkzjNyaJKhw+gJ3y49Tr80mRY527+r6oeYPRD9G/yn5JKokHogg12en0fCOg+SeCquysQKlFrm8werTB+StQvMTVSaPLzVSaZPTctDA18jp3GxUODwJfSLhqCYHFMp8Cl0VunwdMClVXZ1XMzmLK0r07RzNU6BCEIEPVbH7Qo0G5q1RrBuzECeQGpPReRYnt1tJzYFUN/MGMBPw+SwauIqVXl9aq57jvJJPqTpyWhHRv+5mrj9HyN++VL7HrWJ7fYNvgD38DAaP8A7kH4LPq/aM33MM53Wpl/4LzRzp/YlK57jqfJXrSQO+HpOBdpv+f0ddtD7SMU4xTYymOX3jv9xt8FzG09uYjEmaz3PjTM6AOjRYeQVYUwnZPJXxxRj0juxaPDi+WKIC53AD4/BSCw7x/U9AgP/AJP4ikqFtMZnm/x8lM6KAy78rfifPcq/tC7uUrDe79OaMr6vi7reG89VbpsAEAQEuwqxuHoBogeZ48ypw1ACcSpJDDRQueGguO5Ocd3qqmIdmcGDQXd9B6/JDE2NfPs4OtQgHzufgCFYNgeiifeqBuY2fN3/R9VLU0/fFJEUJX0HQ/JNfWa2c0mdwaTbfolxH0P0SuflOhPSPqUCfbOx7Eh/sSS1wa4tewuBGYObqPID1XRELM7MuBwdEjTIAJ1ABIAPotaiwvcGjUrzeeW7LJ/c8znk5ZG2WKeNe1gY23PekpNLjaSVo0djgeN09FoUaDWCGiFHazlc0uiPAUCxt9SraQJVYuCluwQhCYj54IlPY0JkjfZTUxzC9Cj3KANKkbT4lIc3EJPYTdxJ/fBMnQj6rRYCTy+qb7JzrusOCl7rRYKN1Muu824bvPigCJ+I92kJP4vdHmmU8PfM85ncToOgU2YaNHpoE9rUqsVAAnjgmzwUrGqQwhMe5PcVA93+EAJVqBjSeA+O4KvgWHU6m5+gSY0yW0+cu8lJVdlpuPIx13fFRIN8jMJfM/i4x0Fh8lM/cm4ZmVoHABOdqmugSpDcR9D9FG6s1t3GB+9FJW39D9FGUmRfbPQeyFQPwdMjTvj/wDRy38EIqN6rA7Fn/w2RudU/vcfqt6lqOoXm8/GWX5Z5jP/AFJflnUhEIbonBSRwAAhCECBCEIA8M7RbIfhMR7KtYuGZp9194Jb8Od+ioMojivcO0uwqeOoGk+xnMx8SWuGh/XqvFto7PqUarqVZha9pjQwRNnNPvNO4/8AS2tPmU1T7PT+na5Zo7ZfMv8AIjWAJHvHFQik3n6lAYwbl0mqK+sN10wtc7XujgNT1O5PNQDQIYZKAHtAaICXqgwNbngmgE3KYElMKQlNlJVeGiUwI6r9w1/d01ogZj5fUpKbSbnfr+ijxneIpjfryaNVETfBBhxMvPvadNyfjjZjfxOHoLn6KQ7gNJ+An9FE7vVhwa34u/wk+qIPqi01RjxFSKKnqep/RMmwr+F38pPzUakr+F/8h+RUIdZJlb7O/wCw5/8AF6VH/Q/VdHT1C5fsCf8Ax3//ACn4sYuobqvOalVml+TzWpVZZfk6eloE8KOg6QpU0Zr7BCEFMQiVCEDHrku32Ac5jarQ0gFtN4cJs50Mc3gczo/q5X61Q4zDNq03U3+FwIMWPUHcRrPJXwltdksOR45qa8Hz7tVxp1XAiNCAAbA8t1wVUFV7vC09TZexbZ7BU6+TLWc1ze697mte57YO4ZQHTBmI1svOe0vZ/GbOvWa19MuLW1WECbEiW6tMAnyNytHHnjLiz0+m9Qw5ajdMyWUT758grDXbmhNoua7cQd4dYhTFwG9dSp9GkmmrQxrIuVIy6gbVzGG6bzu8uKsaJjFkaqq37w5vdGnPmmvd7Q5R4R4jx/KFZMAJdiAmBPBQUhAc86n5bh++Ke8Tb1S4kwAOJH6n5IBkPvAcB84j5FQ4K5e78TiB0Fgn54L3cPoJ+pSYFsMaOU+t0vJBcstFQUNPM/Mqdyr4U9xvQFPySfY6v4H/AMrv7SqzD3R0Cs1vBU6O/sVSh4W9B8kmVy7O8+z7/QqD/wB2fVjR9F1jVx32d1JFZvA0z6h4/wCK7IBYGrX/ALSPOaxVmkbWy3Egz5LQUGD8DeinCjHozZdghCEyAiEISGLKJTJUGIxBboEtw1Gy1KqbQFF7Cys0OadWkT/0earVcS93LoqxCj8SuiyOP6nEbZ7EPqPmhVaBNi8FrgOeUEO6wOi4moxpe+XNc1pgOaTkdHvNnUHcvanOhePbbewYqqKYAph7ssuAHdgOyz+YGPgtHQ5nJtM3fTc8pNxk+KI2vDRJtwG/0Ufeq/lb8Sk9pTaRIdfeR9Tr5K2XxYLT7NpNMA0MED0TYOp8k4N4pdSnYBSZvVfEO74HAE/IfqrpsFmV3S93JoHrKBMhqT7Lm8/3H9FeYIPRR5NBw+ikpoSBLkZiXQxx5H5IpiAAkxXhPl8wnBHkPIzEf6dTof7VVw3gHQK3W/039Hf2qnhT3B0S8lcvmOw+zqp99Vb+Km13+10f813sLzbsI+Ma0fiY9vwzf8QvTIWLrlWUwPUFWb+DcwYIY2eCnUVGzR0UgK50ZD7HJEJExCoSIQBGXQoq4BEqB1PMTJ1sWkSCpaNAiwkDhu9DcK5aa0SuitlMXUJaVp/w7Bcn4kD4FZuOxNN0ik1z3Rqwd3zdp6SnLRvtMmshHkXJ4/sHh6lZlRpIbP3jHXDm3s0+6dB0E6667cRVaTmcAT4WNk6br6+iR21nNkuLA1oJcXFsgRN4PdG+SVXHHkxv2Mvx5pQ+V0WsZsujVp+zfTaWgANAEZQNMpGkLzTtNgf4GuWk5mloex2/KSRD+cg33ru8N2lZVJFM06mUNLgyo0kBwlroaTAIuNZVh+Jw1Yg1KIc4Huy1r9DuJ4FWYJ5cL5Vr6HRpdY8L74+h5hTqtdfML+XzUzAvSsfsvCYhp9pTA5gAH4WPnK5HbewP4fK5lQuY4xdpBYfdBI1m/wAOK0cOpWThqmbGn9Rx5XtfDMSu6ASsxl3O5wru2PuwGyDPDn1WfRIJJ4x8JXRZ27k2WmGZ9FK0WUdJvdHO/qpSpomivi9AOJH6/RPamV9Z4fVPakJdja3gf0d/aqOC8A8/mVfqeF3Q/wBqpYIfdjz+ZS8lcvmN3sZUy46jzL2+tN/1XqwavG9k4j2NelUmMtRpPTMM3wle0sb3h1WR6iqmn9jE9TXvT+xrNTwVHKWVxWYzQ9EpsolFiodKE2UIsKK9TGNa7KBmO+LxyJ48kytinCJDWk8ST8ABI8ws12Oy2aAwC8Q2fnASMrNzZnAnnMnlEaeS26Ky3WDCc1Ql5GmuUcuHqmMxYdDQQ0aWsPXX0WUaFRz+5VDW5wQ32BJLYILHE1bkn3gBAGm9a5wJebNyjfmAt0EpUMy6prmo5poMDMwmoKtPvNh0uA8ViAMpi5N7XdV2GHeDQnVpIkc+Ast6nhKbYIF9dSkdjGAls3mCIMCeNuSTimCtGB/6FkaXFxEGzRIHDUHQ8wq+enSEEtbMDvOkncJJN/Vbe1cM6qLPAaJu2XX1uACAs3EbHw1TSp7N0RLCHgkb3Nez5KEsTZZGaXZRxGKIiSWg/nAcY4TbyjzCr+1oVAS1zXEiDmq0w4g6zZzXDkd6sDspWpf6b2umQYY1gIkRLTYyJ6W1VDaOyq1Bpc6nLQO8RlPkYVbi49ItVPycn2zwtGn7NzS7V2YFweMtoA7o3zx3rnmv9pUyt8PdkxuAkjktrtHUbVpMIaQ6XADK4SBl8h4lhdm3inXqCqwOaaZDmk7w5paW8xuI4q3Hlde41cGrlCPu5NkJNVHjnNawvBhs2a4ZjBMcj+5us/8AiqLvwg8Rb4wCuuORPo18WqhkVplzFmAOZCe1Z72gEOLyQNJmPXepW44axI4tM+o3KVlimvJafo7of7Qq2CYcgJBj/JUtGuHzEjqIU9Cv3ANd/wA/1Sb54K8kuVRAWgr1TsFtE4jDtDzL6RyOO8gCWOPlaeLSvMatNsZhbiPrC7XsBQfhne3qEinVblyRLiJltQ8Ivb865dVjjOFPsz9ftli+/g9HRKG16ZaHtMg6Red0BI1zTo4TwuDv49FnvST8cnnt6HSiUjYJifgZT/ZlVvT5F4DchsoTshSJfBn9B2jFwWDfne4ve9rham5lJrGRAljmtzX3hzirVHZkmXgAcBB4bwtBrnRoOUH0GllUFSu4uD2ZB7rmVBU32zBzGltuGZaazQfkpplhzqdIE2aBqSYG7/AUP8YKlm2v7/dkctfopabIABAdGjj4tLTnuTzTKmFfqwMcDqHsDT8BdXKn5FZFWzsdL3NA4ZXlscDbXzThWpOsHNB0BaNd0Q5v75Kxh6RDYdkjg0W5alOeynTBdAEC5j/CfAENClUDpc4OEW7gBHwkbt6f7IAzAmZmAD1J42UbcYT7hA3F0Cf6RdRBlR16jg0DUCNOJ3D46bkmNDnV+ALtbyAOhVZxA71V4/qgDkAP2UV8VuotzGdTGUc9Z+h3FNpbJdU71cgukxwA4AcOR8wdUqJWjB2/sxmMc32bYcCYfeTyDQL85E2vGqTY3YvDsaz2zS/K4vDXNp3JIu9zWiRbw6W1IXa0aOXyEeQ0upI/YS2r6EviyqrOX2p2OwNdsOphthDmd2OUeH4Lkan2Tse45MSIykAGnBDtxJDo03cfRen1sp/xIPS3yUFcsGvoeKkicdRkiqUuDxzG/ZpjsPem0Yhu/I9rPMsfAgfzFU6PZ/GSG/w7wXaCG9TeYC9m9kXm+g4EgD0uTy+RUtLDtZZoJcd+/wDwBwHHmpbqOvH6lmgvB4hi8DWox7Wk9k2GZjhPISLro+znYjEYlrX1CKNM3uJeRO5u7zPkvUGYEkzUMwItEcwBFh8THkrrYFgm5E8vquWcaSr7nNbM7E4Og/PlLzEDOZHOQBfzlWMdsqm2BTcRr3HN9owNiLCQRcCIO/RazsU2S0nLfX/rT/Ki71nMqEjV3dDp492ZB8pUHFPszXmm3bfJn7JpVGOcWvlhIdkAhwdlAjvWg9StVzpOU5wb3BIHxPyUbXtecoe4GN26wOhJg3Fuis0aeUAST1JPzRSSpEG3J2x1MQIknmdSosVXyNnnA6nS2/on1qjWiXfvf9FiYr7195AGt9AYkA6BxGp3A7i6yoCUbRd+Jvq/6UyPQnqUKRopQLvHIF4A5ACw8kKNjNFCELILASgoQpJiYDjJ9Tw4JcM0Oc7MAYIiwtIuhC7NPJt9lcxtQQ4czHwJWQ8+0PfvD4G4eMDdv5oQuyPYPotYRoiYuCY9SFdw2h6oQgPBITYngChxseiVCQilXecpO8aH+mfms+iJdTH4z3rmT93m111+FtLJEKSGaNYw1xG4WTME4xP5Gu83ZpKEKMRvsv8A+fmmVTDZHL5oQmhMZX8EwJkbhxA+qzKmKe0gNgWbo1vCpy/KPRCFYQNamZAO8gXhK43QhVSJo57bFd3tKl/Ax7m2Fi2mHjr3r34KU2AA0jfeZgmSdZJPWShCGBXfVcCQNAY0CEIQB//Z",
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    link: "womens-dresses"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw8rju5aEFgF_7IbmRLq2qxztPk0VLFtgfQ&s",
    title: "Mens Fashion",
    rating: 4.5,
    color: "Red",
    link:"mens-shirts",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_vm_0HyUF0d42SWPeYHqzP2LbZl8XRyt7Q&s",
    title: "Electronics",
    rating: 4.7,
    color: "Brown",
    link: "mobile-accessories",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2neS_-qd0JtLJX5NcSCdV7pyP5Bs0f_Htzw&s",
    title: "Jewellery",
    rating: 4.4,
    color: "Yellow",
    link: "womens-jewellery",
  },
  {
    id: 5,
    img: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    title: "Beauty",
    rating: 4.4,
    color: "Yellow",
    link: "beauty",
  },
  {
    id: 6,
    img: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    title: "Fragrances",
    rating: 4.4,
    color: "Yellow",
    link: "fragrances",
  },
  {
    id: 7,
    img: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    title: "Furniture",
    rating: 4.4,
    color: "Yellow",
    link: "furniture",
  },
  {
    id: 8,
    img: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    title: "Kitchen Accessories",
    rating: 4.4,
    color: "Yellow",
    link: "kitchen-accessories",
  },
];

const TopCategory = () => {
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-5 mb-6 relative">
      <div className="container">
        <div className="text-center mb-2 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">Top Categories</h1>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4"
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          >
            {ProductsData.map((data) => (
              <Link to={'/category/' + data.link} key={data.id}>
                <div className="inline-block w-40">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[250px] w-[180px] object-cover rounded-md"
                  />
                  <h3 className="font-semibold text-center">{data.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{data.color}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
