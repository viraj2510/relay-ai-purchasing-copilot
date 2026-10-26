import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateBudget,selectItems,simulate} from './core.mjs';
test('budgets reject malformed and out-of-range values',()=>{for(const n of [NaN,Infinity,-1,14,10001,'bad'])assert.throws(()=>validateBudget(n));assert.equal(validateBudget('150'),150);});
test('server rejects manipulated catalog selections',()=>{assert.throws(()=>selectItems(['free'],100));assert.throws(()=>selectItems(['launch','launch'],100));assert.throws(()=>selectItems(['code'],15));assert.throws(()=>selectItems([],100));assert.equal(selectItems(['code','design'],100).total,98);});
test('simulation always stays within the validated budget',()=>{for(let budget=15;budget<300;budget++){const ids=simulate('launch a startup website',budget);const plan=selectItems(ids,budget);assert.ok(plan.total<=budget);}});
