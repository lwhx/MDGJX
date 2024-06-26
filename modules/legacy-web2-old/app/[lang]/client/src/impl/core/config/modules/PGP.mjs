// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2023
 * @license Apache-2.0
 */
import GeneratePGPKeyPair from "../../operations/GeneratePGPKeyPair.mjs";
import PGPDecrypt from "../../operations/PGPDecrypt.mjs";
import PGPDecryptAndVerify from "../../operations/PGPDecryptAndVerify.mjs";
import PGPEncrypt from "../../operations/PGPEncrypt.mjs";
import PGPEncryptAndSign from "../../operations/PGPEncryptAndSign.mjs";
import PGPVerify from "../../operations/PGPVerify.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.PGP = {
  "Generate PGP Key Pair": GeneratePGPKeyPair,
  "PGP Decrypt": PGPDecrypt,
  "PGP Decrypt and Verify": PGPDecryptAndVerify,
  "PGP Encrypt": PGPEncrypt,
  "PGP Encrypt and Sign": PGPEncryptAndSign,
  "PGP Verify": PGPVerify,
};

export default OpModules;
