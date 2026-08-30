
/* =====================================
   数学ゲーム ステージ一覧
===================================== */

const stages = [

    /* =====================================
       比例
    ===================================== */

    {
        id: 1,
        area: "比例",
        name: "比例の基本",
        type: "linear",
        form: "y = ax",
        problemType: "twoPoints",
        difficulty: 1
    },

    {
        id: 2,
        area: "比例",
        name: "比例定数を求めよう",
        type: "linear",
        form: "y = ax",
        problemType: "findA",
        difficulty: 1
    },

    {
        id: 3,
        area: "比例",
        name: "xからyを求めよう",
        type: "linear",
        form: "y = ax",
        problemType: "findY",
        difficulty: 1
    },

    {
        id: 4,
        area: "比例",
        name: "yからxを求めよう",
        type: "linear",
        form: "y = ax",
        problemType: "findX",
        difficulty: 1
    },

    {
        id: 5,
        area: "比例",
        name: "負の比例定数",
        type: "linear",
        form: "y = ax",
        problemType: "twoPoints",
        difficulty: 2
    },

    {
        id: 6,
        area: "比例",
        name: "比例チャレンジ",
        type: "linear",
        form: "y = ax",
        problemType: "findA",
        difficulty: 2
    },


    /* =====================================
       一次関数
    ===================================== */

    {
        id: 7,
        area: "一次関数",
        name: "一次関数の基本",
        type: "linear",
        form: "y = ax + b",
        problemType: "twoPoints",
        difficulty: 1
    },

    {
        id: 8,
        area: "一次関数",
        name: "傾きを求めよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findA",
        difficulty: 1
    },

    {
        id: 9,
        area: "一次関数",
        name: "切片を求めよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findB",
        difficulty: 1
    },

    {
        id: 10,
        area: "一次関数",
        name: "xからyを求めよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findY",
        difficulty: 1
    },

    {
        id: 11,
        area: "一次関数",
        name: "yからxを求めよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findX",
        difficulty: 1
    },

    {
        id: 12,
        area: "一次関数",
        name: "傾きと切片",
        type: "linear",
        form: "y = ax + b",
        problemType: "twoPoints",
        difficulty: 2
    },

    {
        id: 13,
        area: "一次関数",
        name: "負の傾き",
        type: "linear",
        form: "y = ax + b",
        problemType: "findA",
        difficulty: 2
    },

    {
        id: 14,
        area: "一次関数",
        name: "負の切片",
        type: "linear",
        form: "y = ax + b",
        problemType: "findB",
        difficulty: 2
    },

    {
        id: 15,
        area: "一次関数",
        name: "値を求めよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findY",
        difficulty: 2
    },

    {
        id: 16,
        area: "一次関数",
        name: "逆算しよう",
        type: "linear",
        form: "y = ax + b",
        problemType: "findX",
        difficulty: 2
    },

    {
        id: 17,
        area: "一次関数",
        name: "一次関数チャレンジ",
        type: "linear",
        form: "y = ax + b",
        problemType: "twoPoints",
        difficulty: 3
    },

    {
        id: 18,
        area: "一次関数",
        name: "総合問題",
        type: "linear",
        form: "y = ax + b",
        problemType: "findA",
        difficulty: 3
    },


    /* =====================================
       二次関数
    ===================================== */

    {
        id: 19,
        area: "二次関数",
        name: "二次関数の基本",
        type: "quadratic",
        form: "y = ax²",
        problemType: "twoPoints",
        difficulty: 1
    },

    {
        id: 20,
        area: "二次関数",
        name: "aを求めよう",
        type: "quadratic",
        form: "y = ax²",
        problemType: "findA",
        difficulty: 1
    },

    {
        id: 21,
        area: "二次関数",
        name: "放物線を読み取ろう",
        type: "quadratic",
        form: "y = ax²",
        problemType: "twoPoints",
        difficulty: 2
    },

    {
        id: 22,
        area: "二次関数",
        name: "aを求めよう",
        type: "quadratic",
        form: "y = ax²",
        problemType: "findA",
        difficulty: 2
    },

    {
        id: 23,
        area: "二次関数",
        name: "負のa",
        type: "quadratic",
        form: "y = ax²",
        problemType: "twoPoints",
        difficulty: 2
    },

    {
        id: 24,
        area: "二次関数",
        name: "二次関数チャレンジ",
        type: "quadratic",
        form: "y = ax²",
        problemType: "findA",
        difficulty: 3
    },


    /* =====================================
       ミックス
    ===================================== */

    {
        id: 25,
        area: "比例",
        name: "比例マスター",
        type: "linear",
        form: "y = ax",
        problemType: "findX",
        difficulty: 3
    },

    {
        id: 26,
        area: "比例",
        name: "比例マスター",
        type: "linear",
        form: "y = ax",
        problemType: "findY",
        difficulty: 3
    },

    {
        id: 27,
        area: "一次関数",
        name: "一次関数マスター",
        type: "linear",
        form: "y = ax + b",
        problemType: "findX",
        difficulty: 3
    },

    {
        id: 28,
        area: "一次関数",
        name: "一次関数マスター",
        type: "linear",
        form: "y = ax + b",
        problemType: "findY",
        difficulty: 3
    },

    {
        id: 29,
        area: "二次関数",
        name: "二次関数マスター",
        type: "quadratic",
        form: "y = ax²",
        problemType: "twoPoints",
        difficulty: 3
    },

    {
        id: 30,
        area: "総合",
        name: "関数マスター",
        type: "linear",
        form: "y = ax + b",
        problemType: "twoPoints",
        difficulty: 3
    }

];