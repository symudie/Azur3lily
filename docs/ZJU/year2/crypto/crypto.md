# Crypto(听不懂只能尝试自学)

>其实是早八起不来，，

## chap1 introduction and classical ciphers

secret communicstion

encrypt--加密算法
decrypt--解密算法

### The syntax of encryption

1. Key-generation algorithm `Gen`(概率算法)

2. encryption algorithm `Enc`(输入密钥K和明文m，输出密文c)

3. decryption algorithm `Dec`(输入密文和密钥得到明文)

密钥生成流程定义了密钥空间K，所有的算法都需要满足
`$Dec_k$($Enc_k$(m)) = m`

### Keys and Kerckhoffs' principle

`The cipher method must not be required to be secret, and it must be able to fall into the 
hands of the enemy without inconvenience.`

要求安全性完全依赖于密钥的保密性（还倡导公开算法让大家招漏洞）

### historical ciphers and their cryptanalysis

#### classical

1. 凯撒密码：简单的移位算法（ROT-13--移动13位）

2. 简单的移位：与凯撒密码不同的是，每个字母的移位都不一样，设计到了keygen算法的进行。

3. 单子母对应：26！种对应方法哦。但是基于词义分析还是可以破解

自动化攻击：出于移位不改变字母的频率，对于每一个可能的移位值，计算明文频率 $P_jI_j = p_0*q_j + p_1*q_{j+1} + ... + p_25*q_{j+25} $ 对应上正常英文文本中的频率可以得到对应的字母。

#### Vigenere cipher

##### 原理

维吉尼亚算法基于明文和密钥，用一个短密钥循环对明文进行移位加密，本质是 “多表移位密码”。

##### 破解

- step1:确定密钥长度
  - 找出重复出现的字母组合，根据组合之间的长度来实验对密钥长度的判断。
  - 按照n个字符一组，计算每组的字符率平方和，若符合正常英文的频率和，可以得到长度。

- 


