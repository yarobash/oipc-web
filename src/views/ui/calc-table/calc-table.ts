import m from 'mithril';
import { SolidButton } from '../buttons/solid-button/solid-button';

import './calc-table.css';

export const CalcTable = {
  oncreate: () => {
    const inputs = Array.from(document.getElementsByClassName('cell__input'));
    for (const input of inputs) {
      console.log(input.hasAttribute('readonly') ? input.parentNode : 'put');
      if (!input.hasAttribute('readonly')) {
        input.addEventListener('focus', (e: Event): void => {
          const target: HTMLElement = ((e.target as HTMLInputElement).parentElement);
          target.classList.add('cell_outline');
        });
        input.addEventListener('blur', (e: Event): void => {
          const target: HTMLElement = ((e.target as HTMLInputElement).parentElement);
          target.classList.remove('cell_outline');
        });
      }
    }
  },

  onremove: () => {
    const inputs = Array.from(document.getElementsByClassName('cell__input'));
    for (const input of inputs) {
      console.log(input.hasAttribute('readonly') ? input.parentNode : 'put');
      if (!input.hasAttribute('readonly')) {
        input.removeEventListener('focus', (e: Event): void => {
          const target: HTMLElement = ((e.target as HTMLInputElement).parentElement);
          target.classList.add('cell_outline');
        });
        input.removeEventListener('blur', (e: Event): void => {
          const target: HTMLElement = ((e.target as HTMLInputElement).parentElement);
          target.classList.remove('cell_outline');
        });
      }
    }
  },

  view: () =>
    m('.calc-table', 
      m('.calc-table__cell.cell.cell_1-1',
        m('label.cell__label[for=mtd-dev-name]', 'MTD device name'),
        m('input.cell__input.cell__input_name[id=mtd-dev-name]'),
       ),
      m('.calc-table__cell.cell.cell_1-2',
        m('label.cell__label[for=flash-size]', 'Flash size, MB'),
        m('input.cell__input.cell__input_dec-size[id=flash-size]', {
          value: '8',
          placeholder: '8',
        }),
      ),
      m('.calc-table__cell.cell.cell_1-3.cell_border_black',
        m('label.cell__label[for=initial-offset]', 'Initial offset, dec or hex'),
        m('input.cell__input.cell__input_hex_black[id=initial-offset]', {
          value: '0x0',
          placeholder: '0x0',
        }),
      ),
      m('.calc-table__cell.cell.cell_recalc.cell_1-4',
        m(SolidButton, {
          label: 'Recalculate',
          bgColor: 'button-blue',
          labelColor: 'white',
        }),
      ),
      m('.calc-table__cell.cell.cell_2-1',
        m('label.cell__label[for=part1-name]', 'Partition 1 name'),
        m('input.cell__input.cell__input_name[id=part1-name]', {
          value: 'boot',
          placeholder: 'boot',
        }),
      ),
      m('.calc-table__cell.cell.cell_2-2',
        m('label.cell__label[for=part1-size]', 'Partition 1 size, KB'),
        m('input.cell__input.cell__input_dec-size[id=part1-size]', {
          value: '256',
          placeholder: '256',
        }),
      ),
      m('.calc-table__cell.cell.cell_2-3.cell_bg_grey',
        m('label.cell__label[for=part1-start-addr]', 'Start address'),
        m('input.cell__input.cell__input_hex_blue[id=part1-start-addr][readonly]', {
          value: '0x0',
          placeholder: '0x0',
        }),
      ),
      m('.calc-table__cell.cell.cell_2-4.cell_bg_grey',
        m('label.cell__label[for=part1-hex-size]', 'Hex size, bytes'),
        m('input.cell__input.cell__input_hex_blue[id=part1-hex-size][readonly]', {
          value: '0x40000',
          placeholder: '0x40000',
        }),
      ),
      m('.calc-table__cell.cell.cell_2-5.cell_bg_grey',
        m('label.cell__label[for=part1-end-addr]', 'End address'),
        m('input.cell__input.cell__input_hex_blue[id=part1-end-addr][readonly]', {
          value: '0x3FFFF',
          placeholder: '0x4FFFF',
        }),
      ),
      m('.calc-table__cell.cell.cell_3-1',
        m('label.cell__label[for=part2-name]', 'Partition 2 name'),
        m('input.cell__input.cell__input_name[id=part2-name]', {
          value: 'env',
          placeholder: 'env',
        }),
      ),
      m('.calc-table__cell.cell.cell_3-2',
        m('label.cell__label[for=part2-size]', 'Partition 2 size, KB'),
        m('input.cell__input.cell__input_dec-size[id=part2-size]', {
          value: '64',
          placeholder: '64',
        }),
      ),
      m('.calc-table__cell.cell.cell_3-3.cell_bg_grey',
        m('label.cell__label[for=part2-start-addr]', 'Start address'),
        m('input.cell__input.cell__input_hex_blue[id=part2-start-addr][readonly]', {
          value: '0x40000',
          placeholder: '0x40000',
        }),
      ),
      m('.calc-table__cell.cell.cell_3-4.cell_bg_grey',
        m('label.cell__label[for=part2-hex-size]', 'Hex size, bytes'),
        m('input.cell__input.cell__input_hex_blue[id=part2-hex-size][readonly]', {
          value: '0x10000',
          placeholder: '0x200000',
        }),
      ),
      m('.calc-table__cell.cell.cell_3-5.cell_bg_grey',
        m('label.cell__label[for=part2-end-addr]', 'End address'),
        m('input.cell__input.cell__input_hex_blue[id=part2-end-addr][readonly]', {
          value: '0x4FFFF',
          placeholder: '0x4FFFF',
        }),
      ),
      m('.calc-table__cell.cell.cell_4-1',
        m('label.cell__label[for=part3-name]', 'Partition 3 name'),
        m('input.cell__input.cell__input_name[id=part3-name]', {
          value: 'kernel',
          placeholder: 'kernel',
        }),
      ),
      m('.calc-table__cell.cell.cell_4-2',
        m('label.cell__label[for=part3-size]', 'Partition 3 size, KB'),
        m('input.cell__input.cell__input_dec-size[id=part3-size]', {
          value: '2048',
          placeholder: '2048',
        }),
      ),
      m('.calc-table__cell.cell.cell_4-3.cell_bg_grey',
        m('label.cell__label[for=part3-start-addr]', 'Start address'),
        m('input.cell__input.cell__input_hex_blue[id=part3-start-addr][readonly]', {
          value: '0x50000',
          placeholder: '0x50000',
        }),
      ),
      m('.calc-table__cell.cell.cell_4-4.cell_bg_grey',
        m('label.cell__label[for=part3-hex-size]', 'Hex size, bytes'),
        m('input.cell__input.cell__input_hex_blue[id=part3-hex-size][readonly]', {
          value: '0x200000',
          placeholder: '0x2000000',
        }),
      ),
      m('.calc-table__cell.cell.cell_4-5.cell_bg_grey',
        m('label.cell__label[for=part3-end-addr]', 'End address'),
        m('input.cell__input.cell__input_hex_blue[id=part3-end-addr][readonly]', {
          value: '0x24FFFF',
          placeholder: '0x24FFFF',
        }),
      ),
      m('.calc-table__cell.cell.cell_5-1',
        m('label.cell__label[for=part4-name]', 'Partition 4 name'),
        m('input.cell__input.cell__input_name[id=part4-name]', {
          value: 'rootfs',
          placeholder: 'rootfs',
        }),
      ),
      m('.calc-table__cell.cell.cell_5-2',
        m('label.cell__label[for=part4-size]', 'Partition 4 size, KB'),
        m('input.cell__input.cell__input_dec-size[id=part4-size]', {
          value: '5120',
          placeholder: '5120',
        }),
      ),
      m('.calc-table__cell.cell.cell_5-3.cell_bg_grey',
        m('label.cell__label[for=part4-start-addr]', 'Start address'),
        m('input.cell__input.cell__input_hex_blue[id=part4-start-addr][readonly]', {
          value: '0x250000',
          placeholder: '0x250000',
        }),
      ),
      m('.calc-table__cell.cell.cell_5-4.cell_bg_grey',
        m('label.cell__label[for=part4-hex-size]', 'Hex size, bytes'),
        m('input.cell__input.cell__input_hex_blue[id=part4-hex-size][readonly]', {
          value: '0x500000',
          placeholder: '0x5000000',
        }),
      ),
      m('.calc-table__cell.cell.cell_5-5.cell_bg_grey',
        m('label.cell__label[for=part4-end-addr]', 'End address'),
        m('input.cell__input.cell__input_hex_blue[id=part4-end-addr][readonly]', {
          value: '0x74FFFF',
          placeholder: '0x74FFFF',
        }),
      ),
      m('.calc-table__cell.cell.cell_6-1',
        m('label.cell__label[for=part5-name]', 'Partition 5 name'),
        m('input.cell__input.cell__input_name[id=part5-name]', {
          value: 'rootfs_data',
          placeholder: 'rootfs_data',
        }),
      ),
      m('.calc-table__cell.cell.cell_6-2',
        m('label.cell__label[for=part5-size]', 'Partition 5 size, KB'),
        m('input.cell__input.cell__input_dec-size[id=part5-size]', {
          value: '-',
          placeholder: '-',
        }),
      ),
      m('.calc-table__cell.cell.cell_6-3.cell_bg_grey',
        m('label.cell__label[for=part5-start-addr]', 'Start address'),
        m('input.cell__input.cell__input_hex_blue[id=part5-start-addr][readonly]', {
          value: '0x750000',
          placeholder: '0x750000',
        }),
      ),
      m('.calc-table__cell.cell.cell_6-4.cell_bg_grey',
        m('label.cell__label[for=part5-hex-size]', 'Hex size, bytes'),
        m('input.cell__input.cell__input_hex_blue[id=part5-hex-size][readonly]', {
          value: '',
          placeholder: '',
        }),
      ),
      m('.calc-table__cell.cell.cell_6-5.cell_bg_grey',
        m('label.cell__label[for=part5-end-addr]', 'End address'),
        m('input.cell__input.cell__input_hex_blue[id=part5-end-addr][readonly]', {
          value: '0x74FFFF',
          placeholder: '0x74FFFF',
        }),
      ),
    ),
};
