<template>
    <div class="container-fluid">
        <div class="row project_info">
            <div class="col-md-5 col-6 p-3 pr-4">
                <div class="row item_img">
                    <div class="item-imgs col-md-2">
                        <div class="p-1">
                            <div class="shadow">
                                <a href="#">
                                    <div class="p-1">
                                        <img
                                            class="img-fluid"
                                            src="http://server.mechta-posuda.uz:3000/uploads/products/1595877288254-granit.jpg"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-1">
                            <div class="shadow">
                                <a href="#">
                                    <div class="p-1">
                                        <img
                                            class="img-fluid"
                                            src="http://server.mechta-posuda.uz:3000/uploads/products/1595877288744-brown.jpg"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-1">
                            <div class="shadow">
                                <a href="#">
                                    <div class="p-1">
                                        <img
                                            class="img-fluid"
                                            src="http://server.mechta-posuda.uz:3000/uploads/products/1595877289498-ultra.jpg"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-1">
                            <div class="shadow">
                                <a href="#">
                                    <div class="p-1">
                                        <img
                                            class="img-fluid"
                                            src="http://server.mechta-posuda.uz:3000/uploads/products/1595877289642-bc34d8367c57af786f34bce20fd3cd80d.jpg"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 p-0 m-0">
                        <div
                            class="magnify_parent"
                            style="cursor: pointer; width: auto; height: auto; font-size: 0px; position: relative; user-select: none;"
                        >
                            <img
                                src="http://server.mechta-posuda.uz:3000/uploads/products/1595877288254-granit.jpg"
                                sizes="(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px"
                                alt="TEST"
                                class="magnify"
                                style="width: 100%; height: auto; display: block; pointer-events: none;"
                            />
                            <div>
                                <div
                                    style="width: 100%; height: 142px; inset: 0px auto auto; display: block; background-color: rgba(0, 0, 0, 0.4); position: absolute; opacity: 0; transition: opacity 300ms ease-in 0s;"
                                ></div>
                                <div
                                    style="width: 302px; height: 56px; inset: 142px auto auto 0px; display: block; background-color: rgba(0, 0, 0, 0.4); position: absolute; opacity: 0; transition: opacity 300ms ease-in 0s;"
                                ></div>
                                <div
                                    style="width: 0px; height: 56px; inset: 142px 0px auto auto; display: block; background-color: rgba(0, 0, 0, 0.4); position: absolute; opacity: 0; transition: opacity 300ms ease-in 0s;"
                                ></div>
                                <div
                                    style="width: 100%; height: 115px; inset: 198px auto auto; display: block; background-color: rgba(0, 0, 0, 0.4); position: absolute; opacity: 0; transition: opacity 300ms ease-in 0s;"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <h3 class="font-weight-bold">Кастрюля «Гранит» 10л</h3>
                <div class="rate_content">
                    <ul>
                        <li>
                            <span class="key">Размер</span>
                            <span class="value">10л</span>
                        </li>

                        <li>
                            <span class="key">Диаметр</span>
                            <span class="value">32</span>
                        </li>
                    </ul>
                </div>
                <div class="price">400,000</div>
                <hr />
                <div class="amount_colors">
                    <div class="amount">
                        <p>Количество:</p>
                        <div class="content_amount">
                            <button type="button">-</button>
                            <input type="number" name="amount" value="1" />
                            <button type="button">+</button>
                        </div>
                    </div>
                    <div class="colors">
                        <p>цвет:</p>
                        <div class="content_colors">
                            <span class="pl-1">
                                <input
                                    class="checked"
                                    name="color"
                                    type="radio"
                                    style='background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592845626501-granit.jpg");'
                                />
                            </span>
                            <span class="pl-1">
                                <input
                                    class="checked"
                                    name="color"
                                    type="radio"
                                    style='background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592825362765-granit_brown.jpg");");'
                                />
                            </span>
                            <span class="pl-1">
                                <input
                                    class="checked"
                                    name="color"
                                    type="radio"
                                    style='background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592825694856-granit_ultra.jpg");background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592845626501-granit.jpg");'
                                />
                            </span>
                        </div>
                        <div class="add_btns">
                            <button class="btn d-inline">
                                <i class="fas fa-cart-plus"></i>
                                В корзину
                            </button>
                            <button class="btn d-inline">
                                <i class="fas fa-check"></i>
                                Заказать В Один Клик
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <hr> -->
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
